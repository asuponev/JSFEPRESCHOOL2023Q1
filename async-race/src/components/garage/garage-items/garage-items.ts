import { ICar } from '../../../types/types';
import htmlState from '../../../state/htmlState';
import carView from '../../car/car';

const garageItemsView = (items: ICar[]): HTMLDivElement => {
  const garageItems = document.createElement('div');
  garageItems.classList.add('garage__items');
  garageItems.append(...items.map((car: ICar): HTMLDivElement => carView(car)));
  htmlState.addToElements('garage-items', garageItems);

  return garageItems;
};

export default garageItemsView;
