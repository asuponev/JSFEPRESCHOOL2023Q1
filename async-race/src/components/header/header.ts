import onClickNavigate from '../../actions/onClickNavigate';
import getCurrentPage from '../../services/getCurrentPage';
import htmlState from '../../state/htmlState';
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

  htmlState.addToElements('btn-winners', btnToWinners);

  headerElement.append(btnToGarage, btnToWinners);

  return headerElement;
};

export default headerView;
