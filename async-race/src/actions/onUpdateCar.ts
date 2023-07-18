import { updateCar } from '../services/apiGarage';
import carStore from '../store/carStore';

const onUpdateCar = async (event: SubmitEvent): Promise<void> => {
  event.preventDefault();

  const updateForm = event.target as HTMLFormElement;
  const formData = new FormData(updateForm);

  const id = Number(updateForm.dataset.carId);
  const name = formData.get('name')?.toString().trim();
  const color = formData.get('color')?.toString();

  if (window.confirm('are you sure you want to update this car')) {
    if (name && color) {
      try {
        const updatedCar = await updateCar({ id, name, color });
        carStore.dispatch({ type: 'UPDATE_ITEM', payload: [updatedCar] });
      } catch (error) {
        console.log(error);
      }
    }
  }
};

export default onUpdateCar;
