import './sectionTitle.scss';

interface IProps {
  text: string;
  count: number;
  customClass?: string;
}

const baseSectionTitle = (props: IProps): HTMLHeadingElement => {
  const sectionTitle = document.createElement('h1');
  sectionTitle.classList.add('section__title');
  sectionTitle.textContent = `${props.text} (${props.count})`;
  if (props.customClass) sectionTitle.classList.add(props.customClass);

  return sectionTitle;
};

export default baseSectionTitle;
