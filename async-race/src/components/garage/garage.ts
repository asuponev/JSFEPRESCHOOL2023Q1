import fetchCars from '../../actions/fetchCars';
import carStore from '../../store/carStore';
import sectionLayout from '../layout/section';
import garageControlsView from './garage-controls/garage-controls';
import garageItemsView from './garage-items/garage-items';
import './garage.scss';

const garageView = async (): Promise<HTMLElement> => {
  await fetchCars();
  const { fetchError } = carStore.getState();
  const garage = sectionLayout('garage');

  if (!fetchError) {
    const garageControls = garageControlsView();
    const garageItems = garageItemsView();

    garage.append(garageControls, garageItems);
  } else {
    garage.textContent = fetchError;
  }

  return garage;
};

export default garageView;
