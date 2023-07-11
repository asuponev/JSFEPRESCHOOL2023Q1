import state from '../../../state/state';

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

  state.html.addToElements(id, paginationTitle);

  return paginationTitle;
};

export default basePaginationTitle;
