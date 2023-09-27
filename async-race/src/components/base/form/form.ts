import carStore from '../../../store/carStore';
import baseButton from '../button/button';
import './form.scss';

type InputId = 'create' | 'update';

interface IProps {
  id: InputId;
  onSubmit: (event: SubmitEvent) => void;
}

const baseForm = ({ id, onSubmit }: IProps): HTMLFormElement => {
  const form = document.createElement('form');
  form.id = `form-${id}`;
  form.classList.add('form');
  form.addEventListener('submit', (event) => onSubmit(event));

  const inputName = document.createElement('input');
  inputName.id = `form-${id}-name`;
  inputName.name = 'name';
  inputName.classList.add('form__input', 'form__input--name');
  inputName.required = true;

  const inputColor = document.createElement('input');
  inputColor.id = `form-${id}-color`;
  inputColor.name = 'color';
  inputColor.type = 'color';
  inputColor.defaultValue = '#e2e8f0';
  inputColor.classList.add('form__input', 'form__input--color');

  const btnSubmit = baseButton({
    text: id,
    customClass: 'button--minor',
  });
  btnSubmit.type = 'submit';
  btnSubmit.id = `form-${id}-button`;

  carStore.subscribe((state) => {
    if (id === 'create') {
      inputName.disabled = state.isUpdate;
      inputColor.disabled = state.isUpdate;
      btnSubmit.disabled = state.isUpdate;
    }

    if (id === 'update') {
      inputName.disabled = !state.isUpdate;
      inputColor.disabled = !state.isUpdate;
      btnSubmit.disabled = !state.isUpdate;
    }

    if (id === 'update' && state.selectedCar) {
      form.dataset.carId = `${state.selectedCar.id}`;
      inputName.value = state.selectedCar.name;
      inputColor.value = state.selectedCar.color;
    } else if (id === 'update' && !state.selectedCar) {
      form.removeAttribute('data-car-id');
      inputName.value = '';
      inputColor.value = '#e2e8f0';
    }
  });

  form.append(inputName, inputColor, btnSubmit);
  return form;
};

export default baseForm;
