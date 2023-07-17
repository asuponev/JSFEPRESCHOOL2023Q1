import { IWinner } from '../types/types';

interface IWinnersState {
  items: IWinner[];
  count: number;
  page: number;
  sort: string;
  order: string;
  fetchError: string;
  prevPage: () => void;
  nextPage: () => void;
}

const winnersState: IWinnersState = {
  items: [],
  count: 0,
  page: 1,
  sort: '',
  order: '',
  fetchError: '',
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
