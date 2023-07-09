import getCurrentPage from '../services/getCurrentPage';
import setCurrentPage from '../services/setCurrentPage';

const onClickNavigate = (): void => {
  const garage: HTMLElement | null = document.querySelector('.garage');
  const winners: HTMLElement | null = document.querySelector('.winners');
  const btnG: HTMLButtonElement | null = document.querySelector('#btn-garage');
  const btnW: HTMLButtonElement | null = document.querySelector('#btn-winners');

  const currentPage: string = getCurrentPage();

  if (garage && winners && btnG && btnW) {
    garage.style.display = currentPage === 'garage' ? 'none' : 'block';
    winners.style.display = currentPage === 'winners' ? 'none' : 'block';
    btnG.disabled = currentPage === 'winners';
    btnW.disabled = currentPage === 'garage';
    setCurrentPage(currentPage === 'garage' ? 'winners' : 'garage');
  }
};

export default onClickNavigate;
