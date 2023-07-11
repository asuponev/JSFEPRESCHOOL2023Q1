import carView from '../components/car/car';
import state from '../state/state';
import { ICar } from '../types/types';

const updateHtmlCar = (car: ICar): void => {
  const carItem = state.html.getElement(`car-${car.id}`);
  if (carItem) {
    carItem.innerHTML = '';
    carItem.append(carView(car));
  }
};

export default updateHtmlCar;
