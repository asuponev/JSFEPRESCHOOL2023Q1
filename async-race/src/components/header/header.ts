import onClickNavigate from '../../actions/onClickNavigate';
import carStore from '../../store/carStore';
import navigateStore from '../../store/navigateStore';
import baseButton from '../base/button/button';
import './header.scss';

const headerView = (): HTMLElement => {
  const headerElement = document.createElement('header');
  headerElement.classList.add('header');

  const btnToGarage = baseButton({
    text: 'to garage',
    customClass: 'button--main',
  });

  const btnToWinners = baseButton({
    text: 'to winners',
    customClass: 'button--main',
  });

  btnToGarage.addEventListener('click', () => onClickNavigate('garage'));
  btnToWinners.addEventListener('click', () => onClickNavigate('winners'));

  headerElement.append(btnToGarage, btnToWinners);

  carStore.subscribe((state) => {
    btnToWinners.disabled = state.isWalkBlocking;
  });

  navigateStore.subscribe((state) => {
    btnToGarage.disabled = state.currentView === 'garage';
    btnToWinners.disabled = state.currentView === 'winners';
  });

  return headerElement;
};

export default headerView;
