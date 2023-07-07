import { getAllCars } from '../../api/requests';
import { ICar } from '../../types/types';
import carView from '../car/car';
import uiPaginationBtns from '../ui/pagination/paginationBtns';
import uiPaginationTitle from '../ui/pagination/paginationTitle';
import uiSectionTitle from '../ui/sectionTitle/sectionTitle';
import './garage.scss';

const garagePage = 1;
const cars: ICar[] = await getAllCars(garagePage);

const garageView = (): HTMLElement => {
  const garage = document.createElement('section');
  garage.classList.add('section', 'garage');

  const sectionTitle = uiSectionTitle({ text: 'Garage', count: cars.length });

  const paginationTitle = uiPaginationTitle({ text: 'Page', page: garagePage });

  const garageItems = document.createElement('div');
  garageItems.classList.add('garage__items');
  garageItems.append(...cars.map((car) => carView(car)));

  const paginationBtns = uiPaginationBtns();

  garage.append(sectionTitle, paginationTitle, garageItems, paginationBtns);

  return garage;
};

export default garageView;
