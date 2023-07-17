import carsState from '../state/carsState';
import htmlState from '../state/htmlState';
import moveState from '../state/moveState';
import winnersState from '../state/winnersState';
import fetchCars from './fetchCars';
import fetchWinners from './fetchWinners';
import updateGaragePagination from './view-updaters/updateGaragePagination';
import updateWinnersPagination from './view-updaters/updateWinnersPagination';

const onClickPagination = async (
  view: string,
  direction: string
): Promise<void> => {
  if (view === 'garage') {
    if (direction === 'prev') {
      carsState.prevPage();
    } else {
      carsState.nextPage();
    }

    await fetchCars();
    const btnReset = htmlState.getElementById('btn-reset') as HTMLButtonElement;
    const btnRace = htmlState.getElementById('btn-race') as HTMLButtonElement;
    if (btnRace) btnRace.disabled = false;
    if (btnReset) btnReset.disabled = true;
    updateGaragePagination();
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
