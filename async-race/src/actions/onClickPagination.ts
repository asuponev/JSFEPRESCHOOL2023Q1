import moveState from '../state/moveState';
import winnersState from '../state/winnersState';
import carStore from '../store/carStore';
import fetchCars from './fetchCars';
import fetchWinners from './fetchWinners';
import updateWinnersPagination from './view-updaters/updateWinnersPagination';

const onClickPagination = async (
  view: string,
  direction: string
): Promise<void> => {
  if (view === 'garage') {
    if (direction === 'prev') {
      carStore.dispatch({ type: 'PREV_PAGE' });
    } else {
      carStore.dispatch({ type: 'NEXT_PAGE' });
    }

    await fetchCars();
    moveState.resetAllAnimation();
  } else {
    if (direction === 'prev') {
      winnersState.prevPage();
    } else {
      winnersState.nextPage();
    }

    await fetchWinners();
    updateWinnersPagination();
  }
};

export default onClickPagination;
