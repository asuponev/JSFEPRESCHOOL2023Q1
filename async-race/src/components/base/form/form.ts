import baseButton from '../button/button';
import './form.scss';

type InputId = 'create' | 'update';

interface IProps {
  id: InputId;
  onSubmit: (event: SubmitEvent) => void;
  disabled?: boolean;
}

const baseForm = (props: IProps) => {
  const form = document.createElement('form');
  form.id = `form-${props.id}`;
  form.classList.add('form');
  form.addEventListener('submit', (event) => props.onSubmit(event));

  const inputName = document.createElement('input');
  inputName.id = `form-${props.id}-name`;
  inputName.name = 'name';
  inputName.classList.add('form__input', 'form__input--name');
  inputName.required = true;

  const inputColor = document.createElement('input');
  inputColor.id = `form-${props.id}-color`;
  inputColor.name = 'color';
  inputColor.type = 'color';
  inputColor.classList.add('form__input', 'form__input--color');

  const btnSubmit = baseButton({
    text: props.id,
    customClass: 'button--minor',
  });
  btnSubmit.type = 'submit';
  btnSubmit.id = `form-${props.id}-button`;

  if (props.disabled) {
    inputName.disabled = true;
    inputColor.disabled = true;
    btnSubmit.disabled = true;
  }

  form.append(inputName, inputColor, btnSubmit);
  return form;
};

export default baseForm;
