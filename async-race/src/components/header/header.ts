import onClickNavigate from '../../actions/onClickNavigate';
import getCurrentPage from '../../services/getCurrentPage';
import carStore from '../../store/carStore';
import baseButton from '../base/button/button';
import './header.scss';

const headerView = (): HTMLElement => {
  const headerElement = document.createElement('header');
  headerElement.classList.add('header');

  const btnToGarage = baseButton({
    text: 'to garage',
    customClass: 'button--main',
    disabled: getCurrentPage() === 'garage',
  });

  const btnToWinners = baseButton({
    text: 'to winners',
    customClass: 'button--main',
    disabled: getCurrentPage() === 'winners',
  });

  btnToGarage.addEventListener('click', (event) =>
    onClickNavigate(event, [btnToWinners], 'garage')
  );
  btnToWinners.addEventListener('click', (event) =>
    onClickNavigate(event, [btnToGarage], 'winners')
  );

  headerElement.append(btnToGarage, btnToWinners);

  carStore.subscribe((state) => {
    btnToWinners.disabled = state.isWalkBlocking;
  });

  return headerElement;
};

export default headerView;
