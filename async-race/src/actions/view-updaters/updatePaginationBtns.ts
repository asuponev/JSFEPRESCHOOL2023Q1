import htmlState from '../../state/htmlState';

const updatePaginationBtns = (id: string, page: number, count: number) => {
  const btnPrev = htmlState.getElementById(
    `button-prev-${id}`
  ) as HTMLButtonElement;
  const btnNext = htmlState.getElementById(
    `button-next-${id}`
  ) as HTMLButtonElement;

  const itemsOnPage = id === 'garage' ? 7 : 10;

  if (btnPrev) btnPrev.disabled = page === 1;
  if (btnNext)
    btnNext.disabled =
      count <= itemsOnPage || page === Math.ceil(count / itemsOnPage);
};

export default updatePaginationBtns;
