import './button.scss';

interface IProps {
  text: string;
  customClass?: string;
  disabled?: boolean;
  onClick?: (event: MouseEvent) => void;
}

const baseButton = ({
  text,
  customClass,
  disabled,
  onClick,
}: IProps): HTMLButtonElement => {
  const button = document.createElement('button');
  button.textContent = text;
  button.classList.add('button');
  if (customClass) button.classList.add(customClass);
  if (disabled) button.disabled = true;
  if (onClick) button.addEventListener('click', onClick);

  return button;
};

export default baseButton;
