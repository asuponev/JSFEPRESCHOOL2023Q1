import getCurrentPage from '../../services/getCurrentPage';
import garageView from '../garage/garage';
import navigateView from '../navigate/navigate';
import winnersView from '../winners/winners';

const app = async (): Promise<void> => {
  const currentPage: string = getCurrentPage();

  const garage = garageView();
  const winners = await winnersView();

  garage.style.display = currentPage === 'garage' ? 'block' : 'none';
  winners.style.display = currentPage === 'winners' ? 'block' : 'none';

  const navigate = navigateView();

  document.body.append(navigate, garage, winners);
};

export default app;
