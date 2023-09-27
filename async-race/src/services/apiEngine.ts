import endpoints from '../constants/url';
import { IEnginePerformance, IEngineStatus } from '../types/types';

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
