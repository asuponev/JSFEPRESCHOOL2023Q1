import carStore from '../store/carStore';
import { ICar } from '../types/types';

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
