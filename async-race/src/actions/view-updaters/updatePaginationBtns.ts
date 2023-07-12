import htmlState from '../../state/htmlState';

const updatePaginationBtns = (page: number, count: number) => {
  const btnPrev = htmlState.getElementById(
    'button-prev-garage'
  ) as HTMLButtonElement;
  const btnNext = htmlState.getElementById(
    'button-next-garage'
  ) as HTMLButtonElement;

  if (btnPrev) btnPrev.disabled = page === 1;
  if (btnNext) btnNext.disabled = count <= 7 || page === Math.ceil(count / 7);
};

export default updatePaginationBtns;
