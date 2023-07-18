import { ICar } from '../types/types';
import { createCar } from '../api/requests';
import carStore from '../store/carStore';

const onCreateCar = async (event: SubmitEvent): Promise<void> => {
  event.preventDefault();

  const form = event.target as HTMLFormElement;
  const formData = new FormData(form);

  const name = formData.get('name')?.toString().trim();
  const color = formData.get('color')?.toString();

  if (name && color) {
    try {
      const newCar: ICar = await createCar({ name, color });
      carStore.dispatch({ type: 'ADD_ITEMS', payload: [newCar] });
      form.reset();
    } catch (error) {
      console.log(error);
    }
  }
};

export default onCreateCar;
