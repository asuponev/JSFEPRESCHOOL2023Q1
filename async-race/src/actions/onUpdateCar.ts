import { updateCar } from '../api/requests';
import { ICar } from '../types/types';
import onResetUpdate from './onResetUpdate';

const onUpdateCar = async (event: SubmitEvent): Promise<ICar | undefined> => {
  let updatedCar: ICar | undefined;
  event.preventDefault();

  const updateForm = event.target as HTMLFormElement;
  const formData = new FormData(updateForm);

  const id = Number(updateForm.dataset.carId);
  const name = formData.get('name')?.toString().trim();
  const color = formData.get('color')?.toString();

  if (window.confirm('are you sure you want to update this car')) {
    const inputCreateName: HTMLInputElement | null =
      document.querySelector('#form-create-name');
    const inputCreateColor: HTMLInputElement | null =
      document.querySelector('#form-create-color');
    const btnCreate: HTMLButtonElement | null = document.querySelector(
      '#form-create-button'
    );

    const inputUpdateName: HTMLInputElement | null =
      document.querySelector('#form-update-name');
    const inputUpdateColor: HTMLInputElement | null =
      document.querySelector('#form-update-color');
    const btnUpdate: HTMLButtonElement | null = document.querySelector(
      '#form-update-button'
    );

    if (name && color) {
      try {
        updatedCar = await updateCar({ id, name, color });

        onResetUpdate(
          inputCreateName,
          inputCreateColor,
          btnCreate,
          updateForm,
          inputUpdateName,
          inputUpdateColor,
          btnUpdate
        );
      } catch (error) {
        console.log(error);
      }
    }
  }
  return updatedCar;
};

export default onUpdateCar;
