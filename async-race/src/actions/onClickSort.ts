import winnersStore from '../store/winnersStore';
import fetchWinners from './fetchWinners';

const onClickSort = async (
  event: MouseEvent,
  otherField: HTMLTableCellElement
): Promise<void> => {
  const target = event.target as HTMLTableCellElement;
  const targetClass = target.dataset.sortField;
  const { sort, order } = winnersStore.getState();

  switch (sort) {
    case targetClass: {
      break;
    }
    default:
      winnersStore.dispatch({
        type: 'SORT_MODE',
        sort: targetClass,
        order: '',
      });
  }

  switch (order) {
    case '': {
      target?.classList.add('sort--asc');
      winnersStore.dispatch({ type: 'SORT_MODE', order: 'ASC' });
      break;
    }
    case 'ASC': {
      target?.classList.remove('sort--asc');
      target?.classList.add('sort--desc');
      winnersStore.dispatch({ type: 'SORT_MODE', order: 'DESC' });
      break;
    }
    case 'DESC': {
      target?.classList.remove('sort--desc');
      winnersStore.dispatch({ type: 'OFF_SORT_MODE' });
      break;
    }
  }

  await fetchWinners();
  otherField?.classList.remove('sort--desc');
  otherField?.classList.remove('sort--asc');
};

export default onClickSort;
