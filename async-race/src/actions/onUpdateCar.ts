import { ICar } from '../types/types';
import { updateCar } from '../api/requests';
import htmlState from '../state/htmlState';
import onResetUpdate from './onResetUpdate';
import updateCarInGarageItems from './view-updaters/updateCarInGarageItems';
import updateWinnersPage from './view-updaters/updateWinnersPage';

const onUpdateCar = async (event: SubmitEvent): Promise<ICar | undefined> => {
  let updatedCar: ICar | undefined;
  event.preventDefault();

  const updateForm = event.target as HTMLFormElement;
  const formData = new FormData(updateForm);

  const id = Number(updateForm.dataset.carId);
  const name = formData.get('name')?.toString().trim();
  const color = formData.get('color')?.toString();

  if (window.confirm('are you sure you want to update this car')) {
    const inputCreateName = htmlState.getElementById(
      'form-create-name'
    ) as HTMLInputElement;
    const inputCreateColor = htmlState.getElementById(
      'form-create-color'
    ) as HTMLInputElement;
    const btnCreate = htmlState.getElementById(
      'form-create-button'
    ) as HTMLButtonElement;

    const inputUpdateName = htmlState.getElementById(
      'form-update-name'
    ) as HTMLInputElement;
    const inputUpdateColor = htmlState.getElementById(
      'form-update-color'
    ) as HTMLInputElement;
    const btnUpdate = htmlState.getElementById(
      'form-update-button'
    ) as HTMLButtonElement;

    if (name && color) {
      try {
        updatedCar = await updateCar({ id, name, color });
        updateCarInGarageItems(updatedCar);
        htmlState.currentSelectCar = null;

        onResetUpdate(
          inputCreateName,
          inputCreateColor,
          btnCreate,
          updateForm,
          inputUpdateName,
          inputUpdateColor,
          btnUpdate
        );
        await updateWinnersPage();
      } catch (error) {
        console.log(error);
      }
    }
  }
  return updatedCar;
};

export default onUpdateCar;
