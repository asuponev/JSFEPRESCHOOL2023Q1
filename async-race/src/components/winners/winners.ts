import { IWinner } from '../../types/types';
import winnersState from '../../state/winnersState';
import fetchWinners from '../../actions/fetchWinners';
import sectionLayout from '../layout/section';
import winnersItem from './winners-item/winners-item';
import winnersTableView from './winners-table/winners-table';
import './winners.scss';

const winnersView = async (): Promise<HTMLElement> => {
  await fetchWinners();
  const { items, page, count, fetchError } = winnersState;
  const winners = sectionLayout({ id: 'winners', count, page });

  if (!fetchError) {
    const winnersTable = winnersTableView(
      await Promise.all(
        items.map(
          async (winner: IWinner, i: number): Promise<HTMLTableRowElement> =>
            await winnersItem(winner, i)
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
