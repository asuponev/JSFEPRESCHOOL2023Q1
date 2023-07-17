import winnersItem from '../../components/winners/winners-item/winners-item';
import htmlState from '../../state/htmlState';
import winnersState from '../../state/winnersState';
import { IWinner } from '../../types/types';
import updatePaginationBtns from './updatePaginationBtns';
import updatePaginationTitle from './updatePaginationTitle';

const updateWinnersPagination = async () => {
  const { items, page, count } = winnersState;
  const winnersTable = htmlState.getElementById('winners-table');

  if (winnersTable) {
    winnersTable.innerHTML = '';
    const winnersItems: HTMLTableRowElement[] = await Promise.all(
      items.map(
        async (winner: IWinner, i: number) => await winnersItem(winner, i)
      )
    );
    winnersTable.append(...winnersItems);
  }
  updatePaginationTitle('pagination-title-winners', page);
  updatePaginationBtns('winners', page, count);
};

export default updateWinnersPagination;
