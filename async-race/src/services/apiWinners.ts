import endpoints from '../constants/url';
import { IResponseWinners, IWinner } from '../types/types';

export const getWinners = async (
  page: number,
  sort?: string,
  order?: string
): Promise<IResponseWinners> => {
  try {
    const response = await fetch(
      `${endpoints.winners}?_page=${page}&_limit=10&_sort=${sort}&_order=${order}`
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

export const getWinner = async (id: number): Promise<IWinner> => {
  try {
    const response = await fetch(`${endpoints.winners}/${id}`);

    const data: IWinner = await response.json();
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

export const deleteWinner = async (id: number): Promise<void> => {
  try {
    await fetch(`${endpoints.winners}/${id}`, {
      method: 'DELETE',
    });
  } catch (error) {
    throw new Error('Something went wrong');
  }
};
