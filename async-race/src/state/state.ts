import { IWinner } from '../types/types';

const state = {
  winners: {
    items: [] as IWinner[],
    count: 0,
    page: 1,
    fetchError: '',
  },
};

export default state;
