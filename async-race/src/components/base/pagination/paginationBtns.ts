import baseButton from '../button/button';
import './pagination.scss';

const basePaginationBtns = (): HTMLDivElement => {
  const paginationBtns = document.createElement('div');
  paginationBtns.classList.add('pagination__buttons');
  const btnPrev = baseButton({ text: 'prev', customClass: 'button--main' });
  const btnNext = baseButton({ text: 'next', customClass: 'button--main' });

  paginationBtns.append(btnPrev, btnNext);

  return paginationBtns;
};

export default basePaginationBtns;
