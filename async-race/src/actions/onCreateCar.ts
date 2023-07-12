import { ICar } from '../types/types';
import carsState from '../state/carsState';
import { createCar } from '../api/requests';
import addCarToGarageItems from './view-updaters/addCarToGarageItems';

const onCreateCar = async (event: SubmitEvent): Promise<ICar | undefined> => {
  event.preventDefault();

  const form = event.target as HTMLFormElement;
  const formData = new FormData(form);

  const name = formData.get('name')?.toString().trim();
  const color = formData.get('color')?.toString();

  let newCar: ICar | undefined;

  if (name && color) {
    try {
      newCar = await createCar({ name, color });

      carsState.addItems([newCar]);
      addCarToGarageItems([newCar], carsState.page, carsState.count);

      form.reset();
    } catch (error) {
      console.log(error);
    }
  }

  return newCar;
};

export default onCreateCar;
