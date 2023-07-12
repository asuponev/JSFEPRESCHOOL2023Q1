import htmlState from '../state/htmlState';
import setCurrentPage from '../services/setCurrentPage';
import pages from '../constants/pages';
import { IElement } from '../types/types';

const onClickNavigate = (
  event: MouseEvent,
  neighborButtons: HTMLButtonElement[],
  newPage: string
): void => {
  const targetButton = event.target as HTMLButtonElement;
  const pageElements: IElement[] = htmlState.getElementsByIds(pages);

  targetButton.disabled = true;
  pageElements.forEach((item) => {
    if (item.id === newPage) {
      item.element?.classList.remove('hidden');
    } else {
      item.element?.classList.add('hidden');
    }
  });
  neighborButtons.forEach((button): void => {
    button.disabled = false;
  });
  setCurrentPage(newPage);
};

export default onClickNavigate;
