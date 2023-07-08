import baseButton from '../base/button/button';
import './navigate.scss';

const navigateView = (): HTMLDivElement => {
  const navigateElement = document.createElement('div');
  navigateElement.classList.add('navigate');

  const btnToGarage = baseButton({
    text: 'to garage',
    customClass: 'button--main',
    disabled: true,
  });

  const btnToWinners = baseButton({
    text: 'to winners',
    customClass: 'button--main',
    disabled: false,
  });

  navigateElement.append(btnToGarage, btnToWinners);

  return navigateElement;
};

export default navigateView;
