import carsState from '../../state/carsState';
import htmlState from '../../state/htmlState';
import updateSectionTitle from './updateSectionTitle';

const removeCarFromGarageItems = (carId: number) => {
  carsState.removeItem(carId);
  htmlState.removeFromElements(`car-${carId}`);
  updateSectionTitle('garage-title', carsState.count);
};

export default removeCarFromGarageItems;
