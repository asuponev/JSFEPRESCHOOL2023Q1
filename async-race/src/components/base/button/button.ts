import './button.scss';

interface IProps {
  text: string;
  customClass?: string;
  disabled?: boolean;
  onClick?: () => void;
}

const baseButton = (props: IProps): HTMLButtonElement => {
  const button = document.createElement('button');
  button.textContent = props.text;
  button.classList.add('button');
  if (props.customClass) button.classList.add(props.customClass);
  if (props.disabled) button.disabled = true;
  if (props.onClick) button.addEventListener('click', props.onClick);

  return button;
};

export default baseButton;
