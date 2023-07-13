import { getWinners } from '../api/requests';
import winnersState from '../state/winnersState';

const fetchWinners = async () => {
  try {
    const { data, count } = await getWinners(winnersState.page);
    winnersState.items = data;
    winnersState.count = count;
  } catch (error) {
    winnersState.fetchError = error as string;
  }
};

export default fetchWinners;
