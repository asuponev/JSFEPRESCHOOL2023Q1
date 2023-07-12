import { createCar } from '../api/requests';
import getRandomCars from '../services/getRandomCars';
import addCarToGarageItems from './view-updaters/addCarToGarageItems';

const onGenerateCars = async (event: MouseEvent) => {
  const btn = event.target as HTMLButtonElement;
  btn.disabled = true;

  const newCars = getRandomCars(100);
  try {
    const cars = await Promise.all(
      newCars.map(async (car) => await createCar(car))
    );

    addCarToGarageItems(cars);
    btn.disabled = false;
  } catch (error) {
    console.log(error);
  }
};

export default onGenerateCars;
