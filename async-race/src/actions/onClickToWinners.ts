import setCurrentPage from '../services/setCurrentPage';

const onClickToWinners = (): void => {
  const garage: HTMLElement | null = document.querySelector('.garage');
  const winners: HTMLElement | null = document.querySelector('.winners');
  const btnG: HTMLButtonElement | null = document.querySelector('#btn-garage');
  const btnW: HTMLButtonElement | null = document.querySelector('#btn-winners');

  if (garage && winners && btnG && btnW) {
    garage.style.display = 'none';
    winners.style.display = 'block';
    btnG.disabled = false;
    btnW.disabled = true;
  }

  setCurrentPage('winners');
};

export default onClickToWinners;
