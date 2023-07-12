import { ICar } from '../../types/types';
import htmlState from '../../state/htmlState';
import carView from '../../components/car/car';
import updateSectionTitle from './updateSectionTitle';

const addCarToGarageItems = (newItems: ICar[], newCount: number) => {
  const garageItems = htmlState.getElementById('garage-items');
  if (garageItems?.children.length && garageItems?.children.length < 7) {
    garageItems?.append(
      ...newItems.map((car: ICar): HTMLDivElement => carView(car))
    );
  }
  updateSectionTitle('garage-title', newCount);
};

export default addCarToGarageItems;
