import garageView from '../garage/garage';

const app = (): void => {
  const garage = garageView();
  document.body.append(garage);
};

export default app;
