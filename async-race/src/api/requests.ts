import endpoints from '../constants/url';
import { ICar } from '../types/types';

export const getAllCars = async (page: number, limit = 7) => {
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

export const getCarById = async (id: number) => {
  const response = await fetch(`${endpoints.garage}/${id}`);

  const data: ICar = await response.json();
  return data;
};
