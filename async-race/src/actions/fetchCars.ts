import { getCars } from '../services/apiGarage';
import carStore from '../store/carStore';

const fetchCars = async (): Promise<void> => {
  try {
    const { page } = carStore.getState();
    const { data, count } = await getCars(page);
    carStore.dispatch({ type: 'FETCH', payload: data, count });
  } catch (error) {
    carStore.dispatch({ type: 'FETCH_ERROR', error: error as string });
  }
};

export default fetchCars;
