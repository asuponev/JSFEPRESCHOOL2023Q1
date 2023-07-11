import carView from '../components/car/car';
import state from '../state/state';
import { ICar } from '../types/types';

const updateHtmlGarage = (newCars: ICar[]): void => {
  const { count, page } = state.cars;
  const garageItems = state.html.getElement('garage-items');
  const garageTitle = state.html.getElement('garage-title');
  const paginationTitle = state.html.getElement('pagination-title-garage');

  if (garageTitle) garageTitle.textContent = `Garage (${count})`;
  if (paginationTitle) paginationTitle.textContent = `Page #${page}`;
  if (garageItems?.children.length && garageItems?.children.length < 7) {
    garageItems?.append(
      ...newCars.map((car: ICar): HTMLDivElement => carView(car))
    );
  }
};

export default updateHtmlGarage;
