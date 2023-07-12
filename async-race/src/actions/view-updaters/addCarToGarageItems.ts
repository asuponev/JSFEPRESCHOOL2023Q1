import { ICar } from '../../types/types';
import htmlState from '../../state/htmlState';
import carView from '../../components/car/car';
import updateSectionTitle from './updateSectionTitle';
import updatePaginationBtns from './updatePaginationBtns';

const addCarToGarageItems = (
  newItems: ICar[],
  currentPage: number,
  newCount: number
) => {
  const garageItems = htmlState.getElementById('garage-items');
  if (garageItems?.children.length && garageItems?.children.length < 7) {
    garageItems?.append(
      ...newItems.map((car: ICar): HTMLDivElement => carView(car))
    );
  }
  updateSectionTitle('garage-title', newCount);
  updatePaginationBtns(currentPage, newCount);
};

export default addCarToGarageItems;
