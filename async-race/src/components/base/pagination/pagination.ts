import carStore from '../../../store/carStore';
import winnersStore from '../../../store/winnersStore';
import onClickPagination from '../../../actions/onClickPagination';
import baseButton from '../button/button';
import './pagination.scss';

const paginationView = (id: string): HTMLDivElement => {
  const pagination = document.createElement('div');
  pagination.classList.add('pagination');

  const paginationTitle = document.createElement('p');
  paginationTitle.classList.add('pagination__title');

  const paginationBtns = document.createElement('div');
  paginationBtns.classList.add('pagination__buttons');
  const btnPrev = baseButton({
    text: '<',
    customClass: 'button--main',
    onClick: () => onClickPagination(id, 'prev'),
  });
  const btnNext = baseButton({
    text: '>',
    customClass: 'button--main',
    onClick: () => onClickPagination(id, 'next'),
  });

  paginationBtns.append(btnPrev, btnNext);
  pagination.append(paginationTitle, paginationBtns);

  carStore.subscribe((state) => {
    if (id === 'garage') {
      const { page, count, isWalkBlocking } = state;
      paginationTitle.textContent = `Page #${page}`;
      btnPrev.disabled = page === 1 || isWalkBlocking;
      btnNext.disabled =
        count <= 7 || page === Math.ceil(count / 7) || isWalkBlocking;
    }
  });

  winnersStore.subscribe((state) => {
    if (id === 'winners') {
      const { page, count } = state;
      paginationTitle.textContent = `Page #${page}`;
      btnPrev.disabled = page === 1;
      btnNext.disabled = count <= 10 || page === Math.ceil(count / 10);
    }
  });

  return pagination;
};

export default paginationView;
