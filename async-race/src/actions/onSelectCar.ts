import { ICar } from '../types/types';
import htmlState from '../state/htmlState';
import onResetUpdate from './onResetUpdate';

const onSelectCar = (event: MouseEvent, car: ICar): void => {
  const inputCreateName = htmlState.getElementById(
    'form-create-name'
  ) as HTMLInputElement;
  const inputCreateColor = htmlState.getElementById(
    'form-create-color'
  ) as HTMLInputElement;
  const btnCreate = htmlState.getElementById(
    'form-create-button'
  ) as HTMLButtonElement;

  const updateForm = htmlState.getElementById('form-update') as HTMLFormElement;
  const inputUpdateName = htmlState.getElementById(
    'form-update-name'
  ) as HTMLInputElement;
  const inputUpdateColor = htmlState.getElementById(
    'form-update-color'
  ) as HTMLInputElement;
  const btnUpdate = htmlState.getElementById(
    'form-update-button'
  ) as HTMLButtonElement;

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

  const btnPrevSelected: HTMLButtonElement | null = htmlState.currentSelectCar;
  btnPrevSelected?.classList.remove('button--selected');
  htmlState.currentSelectCar = null;

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
    htmlState.currentSelectCar = btnCurSelected;
  }

  console.log(htmlState.currentSelectCar);
};

export default onSelectCar;
