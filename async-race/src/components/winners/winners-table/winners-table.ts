import onClickSort from '../../../actions/onClickSort';
import winnersStore from '../../../store/winnersStore';
import winnersItem from '../winners-item/winners-item';
import { IWinner } from '../../../types/types';

const winnersTableView = async (): Promise<HTMLTableElement> => {
  const table = document.createElement('table');
  table.classList.add('winners__table');

  // create thead
  const tHead = document.createElement('thead');
  const tr = document.createElement('tr');
  tr.classList.add('winners__table__row');

  const thNumber = document.createElement('th');
  thNumber.classList.add('winners__table__number');
  thNumber.textContent = 'Number';

  const thCar = document.createElement('th');
  thCar.classList.add('winners__table__car');
  thCar.textContent = 'Car';

  const thName = document.createElement('th');
  thName.classList.add('winners__table__name');
  thName.textContent = 'Name';

  const thWins = document.createElement('th');
  thWins.dataset.sortField = 'wins';
  thWins.classList.add('winners__table__wins');
  thWins.textContent = 'Wins';

  const thBestTime = document.createElement('th');
  thBestTime.dataset.sortField = 'time';
  thBestTime.classList.add('winners__table__time');
  thBestTime.textContent = 'Best time (sec.)';

  // add listeners for table sort
  thWins.addEventListener('click', (event) => onClickSort(event, thBestTime));
  thBestTime.addEventListener('click', (event) => onClickSort(event, thWins));

  tr.append(thNumber, thCar, thName, thWins, thBestTime);
  tHead.append(tr);

  // create tbody
  const tBody = document.createElement('tbody');

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

  table.append(tHead, tBody);
  return table;
};

export default winnersTableView;
