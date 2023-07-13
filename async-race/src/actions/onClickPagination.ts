import carsState from '../state/carsState';
import htmlState from '../state/htmlState';
import moveState from '../state/moveState';
import fetchCars from './fetchCars';
import fetchWinners from './fetchWinners';
import updateGaragePagination from './view-updaters/updateGaragePagination';

const onClickPagination = async (
  view: string,
  direction: string
): Promise<void> => {
  if (direction === 'prev') {
    carsState.prevPage();
  } else {
    carsState.nextPage();
  }

  if (view === 'garage') {
    await fetchCars();
    const btnReset = htmlState.getElementById('btn-reset') as HTMLButtonElement;
    const btnRace = htmlState.getElementById('btn-race') as HTMLButtonElement;
    if (btnRace) btnRace.disabled = false;
    if (btnReset) btnReset.disabled = true;
    updateGaragePagination();
    moveState.resetAllAnimation();
  } else {
    await fetchWinners();
  }
};

export default onClickPagination;
