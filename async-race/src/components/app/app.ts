import state from '../../state/state';
import getCurrentPage from '../../services/getCurrentPage';
import garageView from '../garage/garage';
import winnersView from '../winners/winners';
import headerView from '../header/header';

const app = async (): Promise<void> => {
  const currentPage: string = getCurrentPage();

  const garage = await garageView();
  const winners = await winnersView();
  state.html.addToElements('garage', garage);
  state.html.addToElements('winners', winners);

  if (currentPage === 'garage') garage.classList.remove('hidden');
  if (currentPage === 'winners') winners.classList.remove('hidden');

  const header = headerView();

  document.body.append(header, garage, winners);
};

export default app;
