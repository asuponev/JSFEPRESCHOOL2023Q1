import { getAllCars } from '../api/requests';
import carsState from '../state/carsState';

const fetchCars = async () => {
  try {
    const { data, count } = await getAllCars(carsState.page);
    carsState.items = data;
    carsState.count = count;
  } catch (error) {
    carsState.fetchError = error as string;
  }
};

export default fetchCars;
