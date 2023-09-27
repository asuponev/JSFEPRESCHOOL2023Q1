import { deleteCar } from '../services/apiGarage';
import { deleteWinner, getWinner } from '../services/apiWinners';
import carStore from '../store/carStore';
import winnersStore from '../store/winnersStore';
import fetchWinners from './fetchWinners';
import { ICar } from '../types/types';
import fetchCars from './fetchCars';
import moveState from '../store/moveState';

const onDeleteCar = async (car: ICar): Promise<void> => {
  if (window.confirm(`are you sure you want to remove "${car.name}"?`)) {
    try {
      await deleteCar(car.id);
      await fetchCars();
      carStore.dispatch({ type: 'RESET_UPDATE_CAR' });

      moveState.removeStoppedEngine(car.id);
      moveState.stopAnimation(`animate-car-icon-${car.id}`);
      moveState.removeAnimation(`animate-car-icon-${car.id}`);
      if (moveState.startedEngine.length === 0) {
        carStore.dispatch({ type: 'OFF_RACE_MODE' });
      }

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
