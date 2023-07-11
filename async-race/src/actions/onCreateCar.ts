import { ICar } from '../types/types';
import state from '../state/state';
import { createCar } from '../api/requests';
import updateHtmlGarage from './updateHtmlGarage';

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
      state.cars.addItems([newCar]);
      updateHtmlGarage([newCar]);
      form.reset();
    } catch (error) {
      console.log(error);
    }
  }

  return newCar;
};

export default onCreateCar;
