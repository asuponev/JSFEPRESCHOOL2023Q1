import state from '../../state/state';
import fetchCars from '../../actions/fetchCars';
import garageControlsView from './garage-controls/garage-controls';
import garageContentView from './garage-content/garage-content';
import './garage.scss';

const garageView = async (): Promise<HTMLElement> => {
  await fetchCars();
  const garage = document.createElement('section');
  garage.classList.add('section', 'garage', 'hidden');

  if (!state.cars.fetchError) {
    const garageControls = garageControlsView();
    const garageContent = garageContentView();

    garage.append(garageControls, garageContent);
  } else {
    garage.textContent = state.cars.fetchError;
  }

  return garage;
};

export default garageView;
