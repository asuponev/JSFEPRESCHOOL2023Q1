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

  carElement.append(carHeader, carRoad);

  carStore.subscribe((state) => {
    const foundCar = state.items.find((item) => item.id === car.id);
    if (!foundCar) {
      carElement.remove();
    }
  });

  return carElement;
};

export default carView;
