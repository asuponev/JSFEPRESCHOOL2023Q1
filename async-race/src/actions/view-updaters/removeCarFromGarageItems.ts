import htmlState from '../../state/htmlState';
import updatePaginationBtns from './updatePaginationBtns';
import updateSectionTitle from './updateSectionTitle';

const removeCarFromGarageItems = (
  carId: number,
  currentPage: number,
  newCount: number
) => {
  htmlState.getElementById(`car-${carId}`)?.remove();
  htmlState.removeFromElements(`car-${carId}`);
  updateSectionTitle('garage-title', newCount);
  updatePaginationBtns(currentPage, newCount);
};

export default removeCarFromGarageItems;
