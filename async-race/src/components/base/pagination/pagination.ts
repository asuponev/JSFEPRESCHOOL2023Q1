import onClickPagination from '../../../actions/onClickPagination';
import htmlState from '../../../state/htmlState';
import baseButton from '../button/button';
import './pagination.scss';

interface IProps {
  id: string;
  page: number;
  count: number;
}

const paginationView = ({ id, page, count }: IProps) => {
  const itemsOnPage = id === 'garage' ? 7 : 10;
  const pagination = document.createElement('div');
  pagination.classList.add('pagination');

  const paginationTitle = document.createElement('p');
  paginationTitle.classList.add('pagination__title');
  paginationTitle.textContent = `Page #${page}`;
  htmlState.addToElements(`pagination-title-${id}`, paginationTitle);

  const paginationBtns = document.createElement('div');
  paginationBtns.classList.add('pagination__buttons');
  const btnPrev = baseButton({
    text: '<',
    customClass: 'button--main',
    disabled: page === 1,
  });
  const btnNext = baseButton({
    text: '>',
    customClass: 'button--main',
    disabled: count <= itemsOnPage || page === Math.ceil(count / itemsOnPage),
  });

  btnPrev.addEventListener('click', () => onClickPagination(id, 'prev'));
  btnNext.addEventListener('click', () => onClickPagination(id, 'next'));

  htmlState.addToElements(`button-prev-${id}`, btnPrev);
  htmlState.addToElements(`button-next-${id}`, btnNext);

  paginationBtns.append(btnPrev, btnNext);

  pagination.append(paginationTitle, paginationBtns);
  return pagination;
};

export default paginationView;
