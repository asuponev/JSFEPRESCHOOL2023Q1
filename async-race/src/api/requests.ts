import endpoints from '../constants/url';
import {
  ICar,
  IEnginePerformance,
  IEngineStatus,
  IResponseCars,
  IResponseWinners,
  IWinner,
} from '../types/types';

export const getAllCars = async (
  page: number,
  limit = 7
): Promise<IResponseCars> => {
  try {
    const response = await fetch(
      `${endpoints.garage}?_page=${page}&_limit=${limit}`
    );
    const data: ICar[] = await response.json();
    const count = response.headers.get('X-Total-Count');
    return { data, count: Number(count) };
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
): Promise<IResponseWinners> => {
  try {
    const response = await fetch(
      `${endpoints.winners}?_page=${page}&_limit=${limit}`
    );

    const data: IWinner[] = await response.json();
    const count = response.headers.get('X-Total-Count');
    return { data, count: Number(count) };
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

export const startCarEngine = async (id: number) => {
  try {
    const res = await fetch(`${endpoints.engine}/?id=${id}&status=started`, {
      method: 'PATCH',
    });

    const data: IEnginePerformance = await res.json();
    return data;
  } catch (error) {
    throw new Error('Something went wrong');
  }
};

export const stopCarEngine = async (id: number) => {
  try {
    const res = await fetch(`${endpoints.engine}/?id=${id}&status=stopped`, {
      method: 'PATCH',
    });

    const data: IEnginePerformance = await res.json();
    return data;
  } catch (error) {
    throw new Error('Something went wrong');
  }
};

export const enableDriveMode = async (id: number) => {
  try {
    const res = await fetch(`${endpoints.engine}/?id=${id}&status=drive`, {
      method: 'PATCH',
    });

    const data: IEngineStatus = await res.json();
    return data;
  } catch (error) {
    throw new Error('Something went wrong');
  }
};

export const createWinner = async (winner: IWinner): Promise<IWinner> => {
  try {
    const response = await fetch(endpoints.winners, {
      method: 'POST',
      body: JSON.stringify(winner),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    const data: IWinner = await response.json();
    return data;
  } catch (error) {
    throw new Error('Something went wrong');
  }
};

export const updateWinner = async (winner: IWinner) => {
  try {
    const response = await fetch(`${endpoints.winners}/${winner.id}`, {
      method: 'PUT',
      body: JSON.stringify({ wins: winner.wins, time: winner.time }),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    const data: IWinner = await response.json();
    return data;
  } catch (error) {
    throw new Error('Something went wrong');
  }
};

export const getWinner = async (id: number): Promise<IWinner> => {
  try {
    const response = await fetch(`${endpoints.winners}/${id}`);

    const data: IWinner = await response.json();
    return data;
  } catch (error) {
    throw new Error('Something went wrong');
  }
};

export const deleteWinner = async (id: number): Promise<void> => {
  try {
    await fetch(`${endpoints.winners}/${id}`, {
      method: 'DELETE',
    });
  } catch (error) {
    throw new Error('Something went wrong');
  }
};
