import headerView from '../header/header';
import mainView from '../main/main';

const app = async (): Promise<void> => {
  const header = headerView();
  const main = await mainView();

  document.body.append(header, main);
};

export default app;
