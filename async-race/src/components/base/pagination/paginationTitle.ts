interface IProps {
  text: string;
  page: number;
  customClass?: string;
}

const basePaginationTitle = (props: IProps): HTMLParagraphElement => {
  const paginationTitle = document.createElement('p');
  paginationTitle.textContent = `${props.text} #${props.page}`;
  if (props.customClass) paginationTitle.classList.add(props.customClass);

  return paginationTitle;
};

export default basePaginationTitle;
