import { getAllCars } from '../api/requests';
// import carsState from '../state/carsState';
import carStore from '../store/carStore';

const fetchCars = async (): Promise<void> => {
  try {
    const { page } = carStore.getState();
    const { data, count } = await getAllCars(page);
    carStore.dispatch({ type: 'FETCH', payload: data, count });
  } catch (error) {
    carStore.dispatch({ type: 'FETCH_ERROR', error: error as string });
  }
};

export default fetchCars;
