import htmlState from '../../../state/htmlState';

interface IProps {
  id: string;
  page: number;
  customClass?: string;
}

const basePaginationTitle = ({
  id,
  page,
  customClass,
}: IProps): HTMLParagraphElement => {
  const paginationTitle = document.createElement('p');
  paginationTitle.textContent = `Page #${page}`;
  if (customClass) paginationTitle.classList.add(customClass);

  htmlState.addToElements(id, paginationTitle);

  return paginationTitle;
};

export default basePaginationTitle;
