import winnersState from '../state/winnersState';
import updateWinnersPage from './view-updaters/updateWinnersPage';

const onClickSort = async (
  event: MouseEvent,
  otherField: HTMLTableCellElement
) => {
  const target = event.target as HTMLTableCellElement;
  const targetClass = target.className.split(' ')[0];

  switch (winnersState.sort) {
    case targetClass: {
      break;
    }
    default:
      winnersState.sort = targetClass;
      winnersState.order = '';
  }

  switch (winnersState.order) {
    case '': {
      target?.classList.add('sort--asc');
      winnersState.order = 'ASC';
      break;
    }
    case 'ASC': {
      target?.classList.remove('sort--asc');
      target?.classList.add('sort--desc');
      winnersState.order = 'DESC';
      break;
    }
    case 'DESC': {
      target?.classList.remove('sort--desc');
      winnersState.order = '';
      winnersState.sort = '';
      break;
    }
  }

  await updateWinnersPage();
  otherField?.classList.remove('sort--desc');
  otherField?.classList.remove('sort--asc');
};

export default onClickSort;
