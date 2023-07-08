import baseButton from '../button/button';
import './form.scss';

type InputId = 'create' | 'update';

interface IProps {
  id: InputId;
  disabled?: boolean;
}

const baseForm = (props: IProps) => {
  const form = document.createElement('form');
  form.id = props.id;
  form.classList.add('form');

  const inputName = document.createElement('input');
  inputName.id = `${props.id}-name`;
  inputName.name = 'name';
  inputName.classList.add('form__input', 'form__input--name');

  const inputColor = document.createElement('input');
  inputColor.id = `${props.id}-color`;
  inputColor.name = 'color';
  inputColor.type = 'color';
  inputColor.classList.add('form__input', 'form__input--color');

  const btnSubmit = baseButton({
    text: props.id,
    customClass: 'button--minor',
  });
  btnSubmit.type = 'submit';

  if (props.disabled) {
    inputName.disabled = true;
    inputColor.disabled = true;
    btnSubmit.disabled = true;
  }

  form.append(inputName, inputColor, btnSubmit);
  return form;
};

export default baseForm;
