import { getAllCars } from '../../api/requests';
import { ICar } from '../../types/types';
import carView from '../car/car';
import basePaginationBtns from '../base/pagination/paginationBtns';
import basePaginationTitle from '../base/pagination/paginationTitle';
import baseSectionTitle from '../base/sectionTitle/sectionTitle';
import './garage.scss';

const garagePage = 1;
let cars: ICar[] | undefined;
let errorText: string;

try {
  cars = await getAllCars(garagePage);
} catch (error) {
  errorText = error as string;
}

const garageView = (): HTMLElement => {
  const garage = document.createElement('section');
  garage.classList.add('section', 'garage');

  if (cars) {
    const sectionTitle = baseSectionTitle({
      text: 'Garage',
      count: cars.length,
    });

    const paginationTitle = basePaginationTitle({
      text: 'Page',
      page: garagePage,
    });

    const garageItems = document.createElement('div');
    garageItems.classList.add('garage__items');
    garageItems.append(...cars.map((car) => carView(car)));

    const paginationBtns = basePaginationBtns();

    garage.append(sectionTitle, paginationTitle, garageItems, paginationBtns);
  } else {
    garage.textContent = errorText;
  }

  return garage;
};

export default garageView;
