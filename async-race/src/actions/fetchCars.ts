import { getAllCars } from '../api/requests';
import state from '../state/state';

const fetchCars = async () => {
  try {
    const { data, count } = await getAllCars(state.cars.page);
    state.cars.items = data;
    state.cars.count = count;
  } catch (error) {
    state.cars.fetchError = error as string;
  }
};

export default fetchCars;
