import { ICar } from '../types/types';
import state from '../state/state';
import { deleteCar } from '../api/requests';

const onDeleteCar = async (car: ICar): Promise<void> => {
  if (window.confirm(`are you sure you want to remove "${car.name}"?`)) {
    try {
      await deleteCar(car.id);
      state.cars.removeItem(car.id);
    } catch (error) {
      console.log(error);
    }
  }
};

export default onDeleteCar;
