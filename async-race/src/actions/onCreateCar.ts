import { createCar } from '../api/requests';
import { ICar } from '../types/types';

const onCreateCar = async (event: SubmitEvent): Promise<ICar | undefined> => {
  event.preventDefault();

  const form = event.target as HTMLFormElement;
  const formData = new FormData(form);

  const name = formData.get('name')?.toString();
  const color = formData.get('color')?.toString();

  let newCar: ICar | undefined;

  if (name && color) {
    try {
      newCar = await createCar({ name, color });
      form.reset();
    } catch (error) {
      console.log(error);
    }
  }

  return newCar;
};

export default onCreateCar;
