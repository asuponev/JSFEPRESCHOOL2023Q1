import { IWinner } from '../../types/types';
import state from '../../state/state';
import fetchWinners from '../../actions/fetchWinners';
import basePaginationBtns from '../base/pagination/paginationBtns';
import basePaginationTitle from '../base/pagination/paginationTitle';
import baseSectionTitle from '../base/sectionTitle/sectionTitle';
import winnersItem from './winners-item/winners-item';
import winnersTableView from './winners-table/winners-table';
import './winners.scss';

const winnersView = async (): Promise<HTMLElement> => {
  await fetchWinners();
  const { items, page, count, fetchError } = state.winners;
  const winners = document.createElement('section');
  winners.classList.add('section', 'winners', 'hidden');

  if (!fetchError) {
    const sectionTitle = baseSectionTitle({
      id: 'winners-title',
      text: 'Winners',
      count,
    });

    const paginationTitle = basePaginationTitle({
      id: 'pagination-title-winners',
      page,
    });

    const winnersTable = winnersTableView(
      await Promise.all(
        items.map(
          async (winner: IWinner): Promise<HTMLTableRowElement> =>
            await winnersItem(winner)
        )
      )
    );

    const paginationBtns = basePaginationBtns();

    winners.append(sectionTitle, paginationTitle, winnersTable, paginationBtns);
  } else {
    winners.textContent = fetchError;
  }

  return winners;
};

export default winnersView;
