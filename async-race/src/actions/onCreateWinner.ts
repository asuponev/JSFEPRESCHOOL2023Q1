import { createWinner, getWinner, updateWinner } from '../services/apiWinners';
import winnersStore from '../store/winnersStore';
import { IWinner } from '../types/types';

const onCreateWinner = async (winner: Omit<IWinner, 'wins'>): Promise<void> => {
  try {
    const oldWinner = await getWinner(winner.id);
    if (oldWinner.id) {
      const { id, wins, time } = oldWinner;
      const newTime = time <= winner.time ? time : winner.time;
      const updatedWinner = { id, wins: wins + 1, time: newTime };
      await updateWinner(updatedWinner);
      winnersStore.dispatch({
        type: 'UPDATE_WINNER',
        payload: [updatedWinner],
      });
    } else {
      const newWinner = await createWinner({ ...winner, wins: 1 });
      winnersStore.dispatch({ type: 'ADD_WINNER', payload: [newWinner] });
    }
  } catch (error) {
    console.log(error);
  }
};

export default onCreateWinner;
