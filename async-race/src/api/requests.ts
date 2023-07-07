import endpoints from '../constants/url';
import { ICar } from '../types/types';

export const getAllCars = async (page: number, limit = 7) => {
  const response = await fetch(
    `${endpoints.garage}?_page=${page}&_limit=${limit}`
  );

  const data: ICar[] = await response.json();
  return data;
};

export const getCarById = async (id: number) => {
  const response = await fetch(`${endpoints.garage}/${id}`);

  const data: ICar = await response.json();
  return data;
};
