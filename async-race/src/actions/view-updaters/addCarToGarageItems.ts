import { ICar } from '../../types/types';
import htmlState from '../../state/htmlState';
import carsState from '../../state/carsState';
import carView from '../../components/car/car';
import updateSectionTitle from './updateSectionTitle';
import updatePaginationBtns from './updatePaginationBtns';

const addCarToGarageItems = (newItems: ICar[]) => {
  carsState.addItems(newItems);

  const garageItems = htmlState.getElementById('garage-items');
  if (garageItems) {
    const currentLengthGarage = garageItems?.children.length;
    const needRenderCar = 7 - currentLengthGarage;
    garageItems?.append(
      ...newItems
        .slice(0, needRenderCar)
        .map((car: ICar): HTMLDivElement => carView(car))
    );
  }

  updateSectionTitle('garage-title', carsState.count);
  updatePaginationBtns(carsState.page, carsState.count);
};

export default addCarToGarageItems;
