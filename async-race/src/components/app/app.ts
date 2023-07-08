import garageView from '../garage/garage';
import navigateView from '../navigate/navigate';

const app = (): void => {
  const navigate = navigateView();
  const garage = garageView();
  document.body.append(navigate, garage);
};

export default app;
