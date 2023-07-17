import { ICar } from '../../types/types';
import htmlState from '../../state/htmlState';
import carsState from '../../state/carsState';
import carView from '../../components/car/car';
import updatePaginationBtns from './updatePaginationBtns';
import updatePaginationTitle from './updatePaginationTitle';

const updateGaragePagination = () => {
  const { items, page, count } = carsState;
  const garageItems = htmlState.getElementById('garage-items');

  if (garageItems) {
    garageItems.innerHTML = '';
    garageItems?.append(
      ...items.map((car: ICar): HTMLDivElement => carView(car))
    );
  }
  updatePaginationTitle('pagination-title-garage', page);
  updatePaginationBtns('garage', page, count);
};

export default updateGaragePagination;
