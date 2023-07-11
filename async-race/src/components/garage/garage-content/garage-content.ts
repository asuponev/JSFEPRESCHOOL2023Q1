import { ICar } from '../../../types/types';
import state from '../../../state/state';
import basePaginationBtns from '../../base/pagination/paginationBtns';
import basePaginationTitle from '../../base/pagination/paginationTitle';
import baseSectionTitle from '../../base/sectionTitle/sectionTitle';
import carView from '../../car/car';

const garageContentView = (): HTMLDivElement => {
  const { items, page, count } = state.cars;

  const garageContent = document.createElement('div');
  garageContent.classList.add('garage__content');
  const sectionTitle = baseSectionTitle({
    text: 'Garage',
    count,
  });
  const paginationTitle = basePaginationTitle({
    text: 'Page',
    page,
  });

  const garageItems = document.createElement('div');
  garageItems.classList.add('garage__items');
  garageItems.append(...items.map((car: ICar): HTMLDivElement => carView(car)));

  const paginationBtns = basePaginationBtns();

  garageContent.append(
    sectionTitle,
    paginationTitle,
    garageItems,
    paginationBtns
  );

  return garageContent;
};

export default garageContentView;
