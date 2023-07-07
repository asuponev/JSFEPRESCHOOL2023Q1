import uiButton from '../button/button';
import './pagination.scss';

const uiPaginationBtns = () => {
  const paginationBtns = document.createElement('div');
  paginationBtns.classList.add('pagination__buttons');
  const btnPrev = uiButton({ text: 'prev', customClass: 'button--main' });
  const btnNext = uiButton({ text: 'next', customClass: 'button--main' });

  paginationBtns.append(btnPrev, btnNext);

  return paginationBtns;
};

export default uiPaginationBtns;
