import { updateCar } from '../api/requests';
import { ICar } from '../types/types';

const onUpdateCar = async (event: SubmitEvent): Promise<ICar | undefined> => {
  let updatedCar: ICar | undefined;
  event.preventDefault();

  const form = event.target as HTMLFormElement;
  const formData = new FormData(form);

  const id = Number(form.dataset.carId);
  const name = formData.get('name')?.toString();
  const color = formData.get('color')?.toString();

  if (window.confirm('are you sure you want to update this car')) {
    const inputCreateName: HTMLInputElement | null =
      document.querySelector('#form-create-name');
    const inputCreateColor: HTMLInputElement | null =
      document.querySelector('#form-create-color');
    const brnCreate: HTMLButtonElement | null = document.querySelector(
      '#form-create-button'
    );

    const inputUpdateName: HTMLInputElement | null =
      document.querySelector('#form-update-name');
    const inputUpdateColor: HTMLInputElement | null =
      document.querySelector('#form-update-color');
    const brnUpdate: HTMLButtonElement | null = document.querySelector(
      '#form-update-button'
    );

    if (name && color) {
      try {
        updatedCar = await updateCar({ id, name, color });
        form.reset();
        form.removeAttribute('data-car-id');

        if (inputCreateName) inputCreateName.disabled = false;
        if (inputCreateColor) inputCreateColor.disabled = false;
        if (brnCreate) brnCreate.disabled = false;
        if (inputUpdateName) inputUpdateName.disabled = true;
        if (inputUpdateColor) inputUpdateColor.disabled = true;
        if (brnUpdate) brnUpdate.disabled = true;
      } catch (error) {
        console.log(error);
      }
    }
  }
  return updatedCar;
};

export default onUpdateCar;
