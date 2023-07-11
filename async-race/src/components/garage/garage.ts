import { ICar } from '../../types/types';
import { getAllCars } from '../../api/requests';
import garageControlsView from './garage-controls/garage-controls';
import garageContentView from './garage-content/garage-content';
import './garage.scss';

const garagePage = 1;
let cars: ICar[];
let carCount: string;
let errorText: string;

try {
  const { data, count } = await getAllCars(garagePage);
  cars = data;
  carCount = count;
} catch (error) {
  errorText = error as string;
}

const garageView = (): HTMLElement => {
  const garage = document.createElement('section');
  garage.classList.add('section', 'garage', 'hidden');

  if (cars) {
    const garageControls = garageControlsView();
    const garageContent = garageContentView({ carCount, garagePage, cars });

    garage.append(garageControls, garageContent);
  } else {
    garage.textContent = errorText;
  }

  return garage;
};

export default garageView;
