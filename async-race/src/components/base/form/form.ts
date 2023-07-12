import htmlState from '../../../state/htmlState';
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
  inputColor.defaultValue = '#e2e8f0';
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

  htmlState.addToElements(form.id, form);
  htmlState.addToElements(inputName.id, inputName);
  htmlState.addToElements(inputColor.id, inputColor);
  htmlState.addToElements(btnSubmit.id, btnSubmit);

  form.append(inputName, inputColor, btnSubmit);
  return form;
};

export default baseForm;
