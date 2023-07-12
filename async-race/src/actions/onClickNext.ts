import carsState from '../state/carsState';
import fetchCars from './fetchCars';
import updateGaragePagination from './view-updaters/updateGaragePagination';

const onClickNext = async (): Promise<void> => {
  try {
    carsState.nextPage();
    await fetchCars();
    updateGaragePagination();
  } catch (error) {
    console.log(error);
  }
};

export default onClickNext;
