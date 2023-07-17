import { IWinner, ICar } from '../../../types/types';
import { getCarById } from '../../../api/requests';
import carIconView from '../../car/car-icon/car-icon';

const winnersItem = async (
  winner: IWinner,
  index: number
): Promise<HTMLTableRowElement> => {
  const car: ICar = await getCarById(winner.id);

  const tr = document.createElement('tr');
  tr.classList.add('winners__table__row');

  const tdNumber = document.createElement('td');
  tdNumber.textContent = `${index + 1}`;

  const tdCar = document.createElement('td');
  tdCar.append(carIconView(car.color));

  const tdName = document.createElement('td');
  tdName.textContent = car.name;

  const tdWins = document.createElement('td');
  tdWins.textContent = `${winner.wins}`;

  const tdBestTime = document.createElement('td');
  tdBestTime.textContent = `${winner.time}`;

  tr.append(tdNumber, tdCar, tdName, tdWins, tdBestTime);
  return tr;
};

export default winnersItem;
