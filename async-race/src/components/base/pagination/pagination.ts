import htmlState from '../../../state/htmlState';
import baseButton from '../button/button';
import './pagination.scss';

interface IProps {
  id: string;
  page: number;
}

const paginationView = ({ id, page }: IProps) => {
  const pagination = document.createElement('div');
  pagination.classList.add('pagination');

  const paginationTitle = document.createElement('p');
  paginationTitle.classList.add('pagination__title');
  paginationTitle.textContent = `Page #${page}`;
  htmlState.addToElements(id, paginationTitle);

  const paginationBtns = document.createElement('div');
  paginationBtns.classList.add('pagination__buttons');
  const btnPrev = baseButton({ text: '<', customClass: 'button--main' });
  const btnNext = baseButton({ text: '>', customClass: 'button--main' });
  paginationBtns.append(btnPrev, btnNext);

  pagination.append(paginationTitle, paginationBtns);
  return pagination;
};

export default paginationView;
