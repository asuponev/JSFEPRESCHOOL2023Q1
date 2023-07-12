import htmlState from '../../state/htmlState';

const updatePaginationTitle = (id: string, page: number): void => {
  const paginationTitle = htmlState.getElementById(id);
  if (paginationTitle) paginationTitle.textContent = `Page #${page}`;
};

export default updatePaginationTitle;
