import { IWinner } from '../types/types';

interface IWinnersState {
  items: IWinner[];
  count: number;
  page: number;
  fetchError: string;
  addWinner: (winner: Omit<IWinner, 'wins'>) => IWinner;
  prevPage: () => void;
  nextPage: () => void;
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
      winnersState.count += 1;
    }
    return newWinner;
  },
  nextPage: (): void => {
    if (
      winnersState.count > 10 ||
      winnersState.page < Math.ceil(winnersState.count / 10)
    ) {
      winnersState.page += 1;
    }
  },
  prevPage: (): void => {
    if (winnersState.page > 1) {
      winnersState.page -= 1;
    }
  },
};

export default winnersState;
