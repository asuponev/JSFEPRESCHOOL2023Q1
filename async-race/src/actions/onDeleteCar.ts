import { deleteCar } from '../services/apiGarage';
import { deleteWinner, getWinner } from '../services/apiWinners';
import carStore from '../store/carStore';
import winnersStore from '../store/winnersStore';
import fetchWinners from './fetchWinners';
import { ICar } from '../types/types';

const onDeleteCar = async (car: ICar): Promise<void> => {
  if (window.confirm(`are you sure you want to remove "${car.name}"?`)) {
    try {
      await deleteCar(car.id);
      carStore.dispatch({ type: 'REMOVE_ITEM', payload: [car] });
      carStore.dispatch({ type: 'RESET_UPDATE_CAR' });
      const isWinner = await getWinner(car.id);
      if (isWinner.id) {
        await deleteWinner(car.id);
        winnersStore.dispatch({ type: 'REMOVE_WINNER', winnerId: car.id });
        await fetchWinners();
      }
    } catch (error) {
      console.log(error);
    }
  }
};

export default onDeleteCar;
