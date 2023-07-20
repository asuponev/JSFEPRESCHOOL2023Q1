import { getCar } from '../../../services/apiGarage';
import winnersStore from '../../../store/winnersStore';
import carStore from '../../../store/carStore';
import carIconView from '../../car/car-icon/car-icon';
import { IWinner, ICar } from '../../../types/types';

const winnersItem = async (
  winner: IWinner,
  index: number
): Promise<HTMLTableRowElement> => {
  const { page } = winnersStore.getState();
  const car: ICar = await getCar(winner.id);

  const tr = document.createElement('tr');
  tr.classList.add('winners__table__row');
  tr.dataset.winnerId = `${winner.id}`;

  const tdNumber = document.createElement('td');
  tdNumber.textContent = `${index + 1 + (page - 1) * 10}`;

  const tdCar = document.createElement('td');
  const carIcon = document.createElement('div');
  carIcon.innerHTML = carIconView(car.color);
  tdCar.append(carIcon);

  const tdName = document.createElement('td');
  tdName.classList.add('winners__table__row--name');
  const carName = document.createElement('span');
  carName.textContent = car.name;
  const carId = document.createElement('span');
  carId.textContent = `#${car.id}`;
  tdName.append(carName, carId);

  const tdWins = document.createElement('td');
  tdWins.textContent = `${winner.wins}`;

  const tdBestTime = document.createElement('td');
  tdBestTime.textContent = `${winner.time.toFixed(2)}`;

  // subscription to state changes
  winnersStore.subscribe((state) => {
    const foundWinner = state.items.find((item) => item.id === winner.id);
    if (!foundWinner) {
      tr.remove();
    }
    if (foundWinner && foundWinner.wins !== winner.wins) {
      tdWins.textContent = `${foundWinner.wins}`;
    }
    if (foundWinner && foundWinner.time !== winner.time) {
      tdBestTime.textContent = `${foundWinner.time.toFixed(2)}`;
    }
  });

  carStore.subscribe((state) => {
    const foundCar = state.items.find((item) => item.id === car.id);
    if (foundCar && foundCar.color !== car.color) {
      carIcon.innerHTML = carIconView(foundCar.color);
    }
    if (foundCar && foundCar.name !== car.name) {
      carName.textContent = foundCar.name;
      carId.textContent = `#${car.id}`;
    }
  });

  tr.append(tdNumber, tdCar, tdName, tdWins, tdBestTime);
  return tr;
};

export default winnersItem;
