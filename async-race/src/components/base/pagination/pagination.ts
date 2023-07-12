import onClickNext from '../../../actions/onClickNext';
import onClickPrev from '../../../actions/onClickPrev';
import htmlState from '../../../state/htmlState';
import baseButton from '../button/button';
import './pagination.scss';

interface IProps {
  id: string;
  page: number;
  count: number;
}

const paginationView = ({ id, page, count }: IProps) => {
  const pagination = document.createElement('div');
  pagination.classList.add('pagination');

  const paginationTitle = document.createElement('p');
  paginationTitle.classList.add('pagination__title');
  paginationTitle.textContent = `Page #${page}`;
  htmlState.addToElements(id, paginationTitle);

  const paginationBtns = document.createElement('div');
  paginationBtns.classList.add('pagination__buttons');
  const btnPrev = baseButton({
    text: '<',
    customClass: 'button--main',
    disabled: page === 1,
    onClick: onClickPrev,
  });
  const btnNext = baseButton({
    text: '>',
    customClass: 'button--main',
    disabled: count <= 7 || page === Math.ceil(count / 7),
    onClick: onClickNext,
  });
  htmlState.addToElements('button-prev', btnPrev);
  htmlState.addToElements('button-next', btnNext);
  paginationBtns.append(btnPrev, btnNext);

  pagination.append(paginationTitle, paginationBtns);
  return pagination;
};

export default paginationView;
