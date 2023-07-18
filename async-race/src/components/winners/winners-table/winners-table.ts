import onClickSort from '../../../actions/onClickSort';
import winnersStore from '../../../store/winnersStore';
import { IWinner } from '../../../types/types';
import winnersItem from '../winners-item/winners-item';

const winnersTableView = async (): Promise<HTMLTableElement> => {
  // const { items } = winnersStore.getState();
  const table = document.createElement('table');
  table.classList.add('winners__table');

  const tHead = document.createElement('thead');
  const tr = document.createElement('tr');
  tr.classList.add('winners__table__row');

  const thNumber = document.createElement('th');
  thNumber.textContent = 'Number';

  const thCar = document.createElement('th');
  thCar.textContent = 'Car';

  const thName = document.createElement('th');
  thName.textContent = 'Name';

  const thWins = document.createElement('th');
  thWins.classList.add('wins');
  thWins.textContent = 'Wins';

  const thBestTime = document.createElement('th');
  thBestTime.classList.add('time');
  thBestTime.textContent = 'Best time (sec.)';

  thWins.addEventListener('click', (event) => onClickSort(event, thBestTime));
  thBestTime.addEventListener('click', (event) => onClickSort(event, thWins));

  tr.append(thNumber, thCar, thName, thWins, thBestTime);

  tHead.append(tr);

  const tBody = document.createElement('tbody');

  table.append(tHead, tBody);

  // subscription to update items
  winnersStore.subscribe(async (state) => {
    const currentItemsId: number[] = [];
    tBody.childNodes.forEach((element) => {
      if (element instanceof HTMLTableRowElement) {
        currentItemsId.push(Number(element.dataset.winnerId));
      }
    });

    const tableItems: HTMLTableRowElement[] = await Promise.all(
      state.items.map(
        async (winner: IWinner, i: number): Promise<HTMLTableRowElement> =>
          await winnersItem(winner, i)
      )
    );

    tableItems.forEach((element) => {
      if (!currentItemsId.includes(Number(element.dataset.winnerId))) {
        tBody.append(element);
      }
    });
  });

  return table;
};

export default winnersTableView;
