import { getWinners } from '../../api/requests';
import { IWinner } from '../../types/types';
import basePaginationBtns from '../base/pagination/paginationBtns';
import basePaginationTitle from '../base/pagination/paginationTitle';
import baseSectionTitle from '../base/sectionTitle/sectionTitle';
import winnersItem from './winners-item';
import winnersTableView from './winners-table';
import './winners.scss';

const winnersPage = 1;
let winnersItems: IWinner[] | undefined;
let errorText: string;

try {
  winnersItems = await getWinners(winnersPage);
} catch (error) {
  errorText = error as string;
}

const winnersView = async () => {
  const winners = document.createElement('section');
  winners.classList.add('section', 'winners');

  if (winnersItems) {
    const sectionTitle = baseSectionTitle({
      text: 'Winners',
      count: winnersItems.length,
    });

    const paginationTitle = basePaginationTitle({
      text: 'Page',
      page: winnersPage,
    });

    const winnersTable = winnersTableView(
      await Promise.all(
        winnersItems.map(async (winner: IWinner) => await winnersItem(winner))
      )
    );

    const paginationBtns = basePaginationBtns();

    winners.append(sectionTitle, paginationTitle, winnersTable, paginationBtns);
  } else {
    winners.textContent = errorText;
  }

  return winners;
};

export default winnersView;
