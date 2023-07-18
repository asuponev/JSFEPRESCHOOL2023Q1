import { ICar } from '../types/types';
import { deleteCar, deleteWinner, getWinner } from '../api/requests';
import updateWinnersPage from './view-updaters/updateWinnersPage';
import carStore from '../store/carStore';

const onDeleteCar = async (car: ICar): Promise<void> => {
  if (window.confirm(`are you sure you want to remove "${car.name}"?`)) {
    try {
      await deleteCar(car.id);
      carStore.dispatch({ type: 'REMOVE_ITEM', payload: [car] });
      const isWinner = await getWinner(car.id);
      if (isWinner.id) {
        await deleteWinner(car.id);
        // dispatch remove winner
        await updateWinnersPage();
      }
    } catch (error) {
      console.log(error);
    }
  }
};

export default onDeleteCar;
