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
  const winners = document.createElement('section');
  winners.classList.add('section', 'winners', 'hidden');

  if (!state.winners.fetchError) {
    const { items, page, count } = state.winners;
    const sectionTitle = baseSectionTitle({
      text: 'Winners',
      count,
    });

    const paginationTitle = basePaginationTitle({
      text: 'Page',
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
    winners.textContent = state.winners.fetchError;
  }

  return winners;
};

export default winnersView;
