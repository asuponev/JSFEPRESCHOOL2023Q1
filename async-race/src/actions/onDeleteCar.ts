import { ICar } from '../types/types';
import { deleteCar } from '../api/requests';
import removeCarFromGarageItems from './view-updaters/removeCarFromGarageItems';

const onDeleteCar = async (car: ICar): Promise<void> => {
  if (window.confirm(`are you sure you want to remove "${car.name}"?`)) {
    try {
      await deleteCar(car.id);
      removeCarFromGarageItems(car.id);
    } catch (error) {
      console.log(error);
    }
  }
};

export default onDeleteCar;
