import { ICar } from '../../types/types';
import carsState from '../../state/carsState';
import htmlState from '../../state/htmlState';
import carView from '../../components/car/car';

const updateCarInGarageItems = (car: ICar) => {
  carsState.updateItem(car);

  const carItem = htmlState.getElementById(`car-${car.id}`);
  if (carItem) {
    carItem.innerHTML = '';
    carItem.append(carView(car));
  }
};

export default updateCarInGarageItems;
