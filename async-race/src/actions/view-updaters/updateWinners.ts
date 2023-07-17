import winnersItem from '../../components/winners/winners-item/winners-item';
import htmlState from '../../state/htmlState';
import winnersState from '../../state/winnersState';
import { IWinner } from '../../types/types';
import updateSectionTitle from './updateSectionTitle';

const updateWinnersPage = async () => {
  const { items, count } = winnersState;
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

  updateSectionTitle('winners-title', count);
};

export default updateWinnersPage;
