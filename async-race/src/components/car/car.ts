import { ICar } from '../../types/types';
import carRoadView from './car-road/car-road';
import carHeaderView from './car-header/car-header';
import './car.scss';

const carView = (car: ICar): HTMLDivElement => {
  const carElement = document.createElement('div');
  carElement.classList.add('car');
  const carHeader = carHeaderView(car);
  const carRoad = carRoadView(car);

  carElement.append(carHeader, carRoad);

  return carElement;
};

export default carView;
