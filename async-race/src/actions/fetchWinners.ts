import { getWinners } from '../api/requests';
import state from '../state/state';

const fetchWinners = async () => {
  try {
    const { data, count } = await getWinners(state.winners.page);
    state.winners.items = data;
    state.winners.count = count;
  } catch (error) {
    state.winners.fetchError = error as string;
  }
};

export default fetchWinners;
