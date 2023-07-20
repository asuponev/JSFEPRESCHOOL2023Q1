import { ICar } from '../../types/types';
import carStore from '../../store/carStore';
import carRoadView from './car-road/car-road';
import carHeaderView from './car-header/car-header';
import './car.scss';

const carView = (car: ICar): HTMLDivElement => {
  const carElement = document.createElement('div');
  carElement.classList.add('car');
  carElement.dataset.carId = `${car.id}`;

  const carHeader = carHeaderView(car);
  const carRoad = carRoadView(car);

  // subscription to state changes
  carStore.subscribe((state) => {
    const foundCar = state.items.find((item) => item.id === car.id);
    if (!foundCar) {
      carElement.remove();
    }
  });

  carElement.append(carHeader, carRoad);
  return carElement;
};

export default carView;
