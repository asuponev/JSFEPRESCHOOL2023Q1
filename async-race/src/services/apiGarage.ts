import endpoints from '../constants/url';
import { ICar, IResponseCars } from '../types/types';

export const getCars = async (page: number): Promise<IResponseCars> => {
  try {
    const response = await fetch(`${endpoints.garage}?_page=${page}&_limit=7`);
    const data: ICar[] = await response.json();
    const count = response.headers.get('X-Total-Count');
    return { data, count: Number(count) };
  } catch (error) {
    throw new Error(
      'Something went wrong. Most likely, you need to run the server locally from this repo: https://github.com/mikhama/async-race-api'
    );
  }
};

export const getCar = async (id: number): Promise<ICar> => {
  try {
    const response = await fetch(`${endpoints.garage}/${id}`);

    const data: ICar = await response.json();
    return data;
  } catch (error) {
    throw new Error('Something went wrong');
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

export const updateCar = async (car: ICar) => {
  try {
    const response = await fetch(`${endpoints.garage}/${car.id}`, {
      method: 'PUT',
      body: JSON.stringify({ name: car.name, color: car.color }),
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
