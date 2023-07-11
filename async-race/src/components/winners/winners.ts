import { IWinner } from '../../types/types';
import { getWinners } from '../../api/requests';
import basePaginationBtns from '../base/pagination/paginationBtns';
import basePaginationTitle from '../base/pagination/paginationTitle';
import baseSectionTitle from '../base/sectionTitle/sectionTitle';
import winnersItem from './winners-item/winners-item';
import winnersTableView from './winners-table/winners-table';
import './winners.scss';

const winnersPage = 1;
let winnersItems: IWinner[];
let winnersCount: string;
let errorText: string;

try {
  const { data, count } = await getWinners(winnersPage);
  winnersItems = data;
  winnersCount = count;
} catch (error) {
  errorText = error as string;
}

const winnersView = async (): Promise<HTMLElement> => {
  const winners = document.createElement('section');
  winners.classList.add('section', 'winners', 'hidden');

  if (winnersItems) {
    const sectionTitle = baseSectionTitle({
      text: 'Winners',
      count: winnersCount,
    });

    const paginationTitle = basePaginationTitle({
      text: 'Page',
      page: winnersPage,
    });

    const winnersTable = winnersTableView(
      await Promise.all(
        winnersItems.map(
          async (winner: IWinner): Promise<HTMLTableRowElement> =>
            await winnersItem(winner)
        )
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
