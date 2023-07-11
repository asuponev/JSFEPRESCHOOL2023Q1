const winnersTableView = (
  tableItems: HTMLTableRowElement[]
): HTMLTableElement => {
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
  thWins.textContent = 'Wins';

  const thBestTime = document.createElement('th');
  thBestTime.textContent = 'Best time (sec.)';

  tr.append(thNumber, thCar, thName, thWins, thBestTime);

  tHead.append(tr);

  const tBody = document.createElement('tbody');
  tBody.append(...tableItems);

  table.append(tHead, tBody);
  return table;
};

export default winnersTableView;
