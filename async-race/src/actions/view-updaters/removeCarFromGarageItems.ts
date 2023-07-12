import htmlState from '../../state/htmlState';
import updateSectionTitle from './updateSectionTitle';

const removeCarFromGarageItems = (carId: number, newCount: number) => {
  htmlState.getElementById(`car-${carId}`)?.remove();
  htmlState.removeFromElements(`car-${carId}`);
  updateSectionTitle('garage-title', newCount);
};

export default removeCarFromGarageItems;
