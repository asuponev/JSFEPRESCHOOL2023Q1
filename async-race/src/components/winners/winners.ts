import fetchWinners from '../../actions/fetchWinners';
import winnersStore from '../../store/winnersStore';
import sectionLayout from '../layout/section';
import winnersTableView from './winners-table/winners-table';
import './winners.scss';

const winnersView = async (): Promise<HTMLElement> => {
  await fetchWinners();
  const { fetchError } = winnersStore.getState();

  // create section 'Winners'
  const winners = sectionLayout('winners');

  if (!fetchError) {
    const winnersTable = await winnersTableView();

    winners.append(winnersTable);
  } else {
    winners.textContent = fetchError;
  }

  return winners;
};

export default winnersView;
