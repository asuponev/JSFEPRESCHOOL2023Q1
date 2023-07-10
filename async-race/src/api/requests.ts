import endpoints from '../constants/url';
import { ICar, IWinner } from '../types/types';

export const getAllCars = async (page: number, limit = 7): Promise<ICar[]> => {
  try {
    const response = await fetch(
      `${endpoints.garage}?_page=${page}&_limit=${limit}`
    );

    const data: ICar[] = await response.json();
    return data;
  } catch (error) {
    throw new Error(
      'Something went wrong. Most likely, you need to run the server locally from this repo: https://github.com/mikhama/async-race-api'
    );
  }
};

export const getCarById = async (id: number): Promise<ICar> => {
  try {
    const response = await fetch(`${endpoints.garage}/${id}`);

    const data: ICar = await response.json();
    return data;
  } catch (error) {
    throw new Error('Something went wrong');
  }
};

export const getWinners = async (
  page: number,
  limit = 10
): Promise<IWinner[]> => {
  try {
    const response = await fetch(
      `${endpoints.winners}?_page=${page}&_limit=${limit}`
    );

    const data: IWinner[] = await response.json();
    return data;
  } catch (error) {
    throw new Error(
      'Something went wrong. Most likely, you need to run the server locally from this repo: https://github.com/mikhama/async-race-api'
    );
  }
};

export const createCar = async (values: Omit<ICar, 'id'>): Promise<ICar> => {
  try {
    const response = await fetch(endpoints.garage, {
      method: 'POST',
      body: JSON.stringify(values),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    const data: ICar = await response.json();
    return data;
  } catch (error) {
    throw new Error('Something went wrong');
  }
};

export const deleteCar = async (id: number): Promise<void> => {
  try {
    await fetch(`${endpoints.garage}/${id}`, {
      method: 'DELETE',
    });
  } catch (error) {
    throw new Error('Something went wrong');
  }
};
