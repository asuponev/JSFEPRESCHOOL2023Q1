import moveState from '../store/moveState';
import carStore from '../store/carStore';
import winnersStore from '../store/winnersStore';
import fetchCars from './fetchCars';
import fetchWinners from './fetchWinners';

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
      winnersStore.dispatch({ type: 'PREV_PAGE' });
    } else {
      winnersStore.dispatch({ type: 'NEXT_PAGE' });
    }
    await fetchWinners();
  }
};

export default onClickPagination;
