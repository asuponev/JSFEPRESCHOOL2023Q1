import { IWinner } from '../../types/types';
import state from '../../state/state';
import fetchWinners from '../../actions/fetchWinners';
import sectionLayout from '../layout/section';
import winnersItem from './winners-item/winners-item';
import winnersTableView from './winners-table/winners-table';
import './winners.scss';

const winnersView = async (): Promise<HTMLElement> => {
  await fetchWinners();
  const { items, page, count, fetchError } = state.winners;
  const winners = sectionLayout({ id: 'winners', count, page });

  if (!fetchError) {
    const winnersTable = winnersTableView(
      await Promise.all(
        items.map(
          async (winner: IWinner): Promise<HTMLTableRowElement> =>
            await winnersItem(winner)
        )
      )
    );

    winners.append(winnersTable);
  } else {
    winners.textContent = fetchError;
  }

  return winners;
};

export default winnersView;
