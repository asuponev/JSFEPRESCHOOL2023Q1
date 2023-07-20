import onClickNavigate from '../../actions/onClickNavigate';
import carStore from '../../store/carStore';
import navigateStore from '../../store/navigateStore';
import baseButton from '../base/button/button';
import './header.scss';

const headerView = (): HTMLElement => {
  const headerElement = document.createElement('header');
  headerElement.classList.add('header');

  // create navigation buttons
  const btnToGarage = baseButton({
    text: 'to garage',
    customClass: 'button--main',
    onClick: () => onClickNavigate('garage'),
  });
  const btnToWinners = baseButton({
    text: 'to winners',
    customClass: 'button--main',
    onClick: () => onClickNavigate('winners'),
  });

  // subscription to state changes
  carStore.subscribe((state) => {
    btnToWinners.disabled = state.isWalkBlocking;
  });

  navigateStore.subscribe((state) => {
    btnToGarage.disabled = state.currentView === 'garage';
    btnToWinners.disabled = state.currentView === 'winners';
  });

  headerElement.append(btnToGarage, btnToWinners);
  return headerElement;
};

export default headerView;
