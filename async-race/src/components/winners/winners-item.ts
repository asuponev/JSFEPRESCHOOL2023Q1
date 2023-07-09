import { getCarById } from '../../api/requests';
import { IWinner, ICar } from '../../types/types';
import carIconView from '../car/car-icon/car-icon';

const winnersItem = async (props: IWinner): Promise<HTMLTableRowElement> => {
  const car: ICar = await getCarById(props.id);

  const tr = document.createElement('tr');
  tr.classList.add('winners__table__row');

  const tdNumber = document.createElement('td');
  tdNumber.textContent = `${props.id}`;

  const tdCar = document.createElement('td');
  tdCar.append(carIconView(car.color));

  const tdName = document.createElement('td');
  tdName.textContent = car.name;

  const tdWins = document.createElement('td');
  tdWins.textContent = `${props.wins}`;

  const tdBestTime = document.createElement('td');
  tdBestTime.textContent = `${props.time}`;

  tr.append(tdNumber, tdCar, tdName, tdWins, tdBestTime);
  return tr;
};

export default winnersItem;
