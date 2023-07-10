import { ICar } from '../types/types';
import onResetUpdate from './onResetUpdate';

const onSelectCar = (event: MouseEvent, car: ICar): void => {
  const inputCreateName: HTMLInputElement | null =
    document.querySelector('#form-create-name');
  const inputCreateColor: HTMLInputElement | null =
    document.querySelector('#form-create-color');
  const btnCreate: HTMLButtonElement | null = document.querySelector(
    '#form-create-button'
  );

  const updateForm: HTMLFormElement | null =
    document.querySelector('#form-update');
  const inputUpdateName: HTMLInputElement | null =
    document.querySelector('#form-update-name');
  const inputUpdateColor: HTMLInputElement | null =
    document.querySelector('#form-update-color');
  const btnUpdate: HTMLButtonElement | null = document.querySelector(
    '#form-update-button'
  );

  if (inputCreateName) inputCreateName.disabled = true;
  if (inputCreateColor) inputCreateColor.disabled = true;
  if (btnCreate) btnCreate.disabled = true;

  if (updateForm) updateForm.dataset.carId = `${car.id}`;

  if (inputUpdateName) {
    inputUpdateName.disabled = false;
    inputUpdateName.value = car.name;
  }

  if (inputUpdateColor) {
    inputUpdateColor.disabled = false;
    inputUpdateColor.value = car.color;
  }

  if (btnUpdate) btnUpdate.disabled = false;

  const btnPrevSelected: HTMLButtonElement | null =
    document.querySelector('.button--selected');
  btnPrevSelected?.classList.remove('button--selected');
  const btnCurSelected = event.target as HTMLButtonElement;
  if (btnPrevSelected === btnCurSelected) {
    onResetUpdate(
      inputCreateName,
      inputCreateColor,
      btnCreate,
      updateForm,
      inputUpdateName,
      inputUpdateColor,
      btnUpdate
    );
  } else {
    btnCurSelected.classList.add('button--selected');
  }
};

export default onSelectCar;
