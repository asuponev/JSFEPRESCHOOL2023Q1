import carsState from '../../state/carsState';
import fetchCars from '../../actions/fetchCars';
import garageControlsView from './garage-controls/garage-controls';
import garageItemsView from './garage-items/garage-items';
import './garage.scss';
import sectionLayout from '../layout/section';

const garageView = async (): Promise<HTMLElement> => {
  await fetchCars();
  const { items, count, page, fetchError } = carsState;
  const garage = sectionLayout({ id: 'garage', count, page });

  if (!fetchError) {
    const garageControls = garageControlsView();
    const garageItems = garageItemsView(items);

    garage.append(garageControls, garageItems);
  } else {
    garage.textContent = fetchError;
  }

  return garage;
};

export default garageView;
