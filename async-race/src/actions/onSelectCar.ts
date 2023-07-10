import { ICar } from '../types/types';

const onSelectCar = (car: ICar): void => {
  const inputCreateName: HTMLInputElement | null =
    document.querySelector('#form-create-name');
  const inputCreateColor: HTMLInputElement | null =
    document.querySelector('#form-create-color');
  const brnCreate: HTMLButtonElement | null = document.querySelector(
    '#form-create-button'
  );

  const updateForm: HTMLFormElement | null =
    document.querySelector('#form-update');
  const inputUpdateName: HTMLInputElement | null =
    document.querySelector('#form-update-name');
  const inputUpdateColor: HTMLInputElement | null =
    document.querySelector('#form-update-color');
  const brnUpdate: HTMLButtonElement | null = document.querySelector(
    '#form-update-button'
  );

  if (inputCreateName) inputCreateName.disabled = true;
  if (inputCreateColor) inputCreateColor.disabled = true;
  if (brnCreate) brnCreate.disabled = true;

  if (updateForm) updateForm.dataset.carId = `${car.id}`;

  if (inputUpdateName) {
    inputUpdateName.disabled = false;
    inputUpdateName.value = car.name;
  }

  if (inputUpdateColor) {
    inputUpdateColor.disabled = false;
    inputUpdateColor.value = car.color;
  }

  if (brnUpdate) brnUpdate.disabled = false;
};

export default onSelectCar;
