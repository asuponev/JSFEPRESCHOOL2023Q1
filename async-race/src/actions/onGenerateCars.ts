import { createCar } from '../api/requests';
import getRandomCars from '../services/getRandomCars';
import carStore from '../store/carStore';

const onGenerateCars = async (event: MouseEvent): Promise<void> => {
  const btn = event.target as HTMLButtonElement;
  btn.disabled = true;

  const newCars = getRandomCars(100);
  try {
    const cars = await Promise.all(
      newCars.map(async (car) => await createCar(car))
    );
    carStore.dispatch({ type: 'ADD_ITEMS', payload: cars });
    btn.disabled = false;
  } catch (error) {
    console.log(error);
  }
};

export default onGenerateCars;
