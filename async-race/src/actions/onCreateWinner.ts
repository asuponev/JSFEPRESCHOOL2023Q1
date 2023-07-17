import { createWinner, getWinner, updateWinner } from '../api/requests';
import winnersState from '../state/winnersState';
import { IWinner } from '../types/types';
import fetchWinners from './fetchWinners';
import updatePaginationBtns from './view-updaters/updatePaginationBtns';
import updateWinnersPage from './view-updaters/updateWinnersPage';

const onCreateWinner = async (winner: Omit<IWinner, 'wins'>) => {
  const oldWinner = await getWinner(winner.id);
  if (oldWinner.id) {
    const { id, wins, time } = oldWinner;
    const newTime = time <= winner.time ? time : winner.time;
    const updatedWinner = { id, wins: wins + 1, time: newTime };
    await updateWinner(updatedWinner);
  } else {
    await createWinner({ ...winner, wins: 1 });
  }
  await fetchWinners();
  updateWinnersPage();
  updatePaginationBtns('winners', winnersState.page, winnersState.count);
};

export default onCreateWinner;
