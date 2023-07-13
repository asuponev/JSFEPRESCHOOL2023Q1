import carsState from '../state/carsState';
import moveState from '../state/moveState';
import fetchCars from './fetchCars';
import updateGaragePagination from './view-updaters/updateGaragePagination';

const onClickPrev = async (): Promise<void> => {
  try {
    carsState.prevPage();
    await fetchCars();
    updateGaragePagination();
    moveState.resetAllAnimation();
  } catch (error) {
    console.log(error);
  }
};

export default onClickPrev;
