import { ICar } from '../types/types';
import carsState from '../state/carsState';
import { deleteCar } from '../api/requests';
import removeCarFromGarageItems from './view-updaters/removeCarFromGarageItems';

const onDeleteCar = async (car: ICar): Promise<void> => {
  if (window.confirm(`are you sure you want to remove "${car.name}"?`)) {
    try {
      await deleteCar(car.id);

      carsState.removeItem(car.id);
      removeCarFromGarageItems(car.id, carsState.page, carsState.count);
    } catch (error) {
      console.log(error);
    }
  }
};

export default onDeleteCar;
