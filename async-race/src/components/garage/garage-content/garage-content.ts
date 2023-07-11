import { ICar } from '../../../types/types';
import basePaginationBtns from '../../base/pagination/paginationBtns';
import basePaginationTitle from '../../base/pagination/paginationTitle';
import baseSectionTitle from '../../base/sectionTitle/sectionTitle';
import carView from '../../car/car';

interface IProps {
  carCount: string;
  garagePage: number;
  cars: ICar[];
}

const garageContentView = ({
  carCount,
  garagePage,
  cars,
}: IProps): HTMLDivElement => {
  const garageContent = document.createElement('div');
  garageContent.classList.add('garage__content');
  const sectionTitle = baseSectionTitle({
    text: 'Garage',
    count: carCount,
  });
  const paginationTitle = basePaginationTitle({
    text: 'Page',
    page: garagePage,
  });

  const garageItems = document.createElement('div');
  garageItems.classList.add('garage__items');
  garageItems.append(...cars.map((car: ICar): HTMLDivElement => carView(car)));

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
