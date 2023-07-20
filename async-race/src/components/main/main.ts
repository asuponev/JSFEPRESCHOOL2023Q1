import navigateStore from '../../store/navigateStore';
import garageView from '../garage/garage';
import winnersView from '../winners/winners';

const mainView = async (): Promise<HTMLElement> => {
  const main = document.createElement('main');

  // create sections
  const garage = await garageView();
  const winners = await winnersView();

  // subscription to state changes
  navigateStore.subscribe((state) => {
    if (state.currentView === 'winners') {
      garage.classList.add('hidden');
      winners.classList.remove('hidden');
    } else {
      garage.classList.remove('hidden');
      winners.classList.add('hidden');
    }
  });

  main.append(garage, winners);
  return main;
};

export default mainView;
