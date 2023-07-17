import { ICar } from '../types/types';
import { deleteCar, deleteWinner, getWinner } from '../api/requests';
import removeCarFromGarageItems from './view-updaters/removeCarFromGarageItems';
import updateWinnersPage from './view-updaters/updateWinnersPage';

const onDeleteCar = async (car: ICar): Promise<void> => {
  if (window.confirm(`are you sure you want to remove "${car.name}"?`)) {
    try {
      await deleteCar(car.id);
      removeCarFromGarageItems(car.id);

      const isWinner = await getWinner(car.id);
      if (isWinner.id) {
        await deleteWinner(car.id);
        await updateWinnersPage();
      }
    } catch (error) {
      console.log(error);
    }
  }
};

export default onDeleteCar;
