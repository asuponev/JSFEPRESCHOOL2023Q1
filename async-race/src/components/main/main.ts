import getCurrentPage from '../../services/getCurrentPage';
import state from '../../state/state';
import garageView from '../garage/garage';
import winnersView from '../winners/winners';

const mainView = async (): Promise<HTMLElement> => {
  const currentPage: string = getCurrentPage();

  const main = document.createElement('main');

  const garage = await garageView();
  const winners = await winnersView();
  state.html.addToElements('garage', garage);
  state.html.addToElements('winners', winners);

  if (currentPage === 'garage') garage.classList.remove('hidden');
  if (currentPage === 'winners') winners.classList.remove('hidden');

  main.append(garage, winners);
  return main;
};

export default mainView;
