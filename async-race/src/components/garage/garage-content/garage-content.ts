import { ICar } from '../../../types/types';
import carsState from '../../../state/carsState';
import htmlState from '../../../state/htmlState';
import basePaginationBtns from '../../base/pagination/paginationBtns';
import basePaginationTitle from '../../base/pagination/paginationTitle';
import baseSectionTitle from '../../base/sectionTitle/sectionTitle';
import carView from '../../car/car';

const garageContentView = (): HTMLDivElement => {
  const { items, page, count } = carsState;

  const garageContent = document.createElement('div');
  garageContent.classList.add('garage__content');
  const sectionTitle = baseSectionTitle({
    id: 'garage-title',
    text: 'Garage',
    count,
  });
  const paginationTitle = basePaginationTitle({
    id: 'pagination-title-garage',
    page,
  });

  const garageItems = document.createElement('div');
  garageItems.classList.add('garage__items');
  garageItems.append(...items.map((car: ICar): HTMLDivElement => carView(car)));
  htmlState.addToElements('garage-items', garageItems);

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
