import state from '../../../state/state';
import './sectionTitle.scss';

interface IProps {
  id: string;
  text: string;
  count: number;
  customClass?: string;
}

const baseSectionTitle = ({
  id,
  text,
  count,
  customClass,
}: IProps): HTMLHeadingElement => {
  const sectionTitle = document.createElement('h1');
  sectionTitle.classList.add('section__title');
  sectionTitle.textContent = `${text} (${count})`;
  if (customClass) sectionTitle.classList.add(customClass);

  state.html.addToElements(id, sectionTitle);

  return sectionTitle;
};

export default baseSectionTitle;
