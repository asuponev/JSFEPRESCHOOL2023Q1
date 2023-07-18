import { ICar } from '../types/types';
import carStore from '../store/carStore';

const onSelectCar = (event: MouseEvent, car: ICar): void => {
  const btnCurrentSelect = event.target as HTMLButtonElement;
  const currentSelectId = Number(btnCurrentSelect.dataset.carId);
  const { selectedCar } = carStore.getState();

  if (currentSelectId === selectedCar?.id) {
    carStore.dispatch({ type: 'RESET_UPDATE_CAR' });
  } else {
    carStore.dispatch({ type: 'SELECT_CAR', payload: [car] });
  }
};

export default onSelectCar;
