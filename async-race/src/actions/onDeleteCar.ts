import { deleteCar } from '../api/requests';
import { ICar } from '../types/types';

const onDeleteCar = async (car: ICar): Promise<void> => {
  if (window.confirm(`are you sure you want to remove "${car.name}"?`)) {
    try {
      await deleteCar(car.id);
    } catch (error) {
      console.log(error);
    }
  }
};

export default onDeleteCar;
