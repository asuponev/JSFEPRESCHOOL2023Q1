import { IWinner } from '../types/types';

interface IWinnersState {
  items: IWinner[];
  count: number;
  page: number;
  fetchError: string;
  addWinner: (winner: Omit<IWinner, 'wins'>) => IWinner;
}

const winnersState: IWinnersState = {
  items: [],
  count: 0,
  page: 1,
  fetchError: '',
  addWinner: (winner: Omit<IWinner, 'wins'>): IWinner => {
    const oldIndex = winnersState.items.findIndex(
      (item) => item.id === winner.id
    );
    let newWinner: IWinner | null = null;
    if (oldIndex !== -1) {
      const { id, wins, time } = winnersState.items[oldIndex];
      const newTime = time <= winner.time ? time : winner.time;
      newWinner = { id, wins: wins + 1, time: newTime };
      winnersState.items[oldIndex] = newWinner;
    } else {
      newWinner = { ...winner, wins: 1 };
      winnersState.items.push(newWinner);
    }
    return newWinner;
  },
};

export default winnersState;
