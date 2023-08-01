import { ICar } from '../../../types/types';
import carView from '../../car/car';
import carStore from '../../../store/carStore';

const garageItemsView = (): HTMLDivElement => {
  const garageItems = document.createElement('div');
  garageItems.classList.add('garage__items');

  carStore.subscribe((state) => {
    const currentItemsId: number[] = [];
    garageItems.childNodes.forEach((element) => {
      if (element instanceof HTMLElement) {
        currentItemsId.push(Number(element.dataset.carId));
      }
    });

    state.items.forEach((item: ICar) => {
      if (!currentItemsId.includes(item.id)) {
        garageItems.append(carView(item));
      }
    });
  });

  return garageItems;
};

export default garageItemsView;
