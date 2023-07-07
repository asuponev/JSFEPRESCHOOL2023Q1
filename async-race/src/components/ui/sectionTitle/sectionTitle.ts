import './sectionTitle.scss';

interface IProps {
  text: string;
  count: number;
  customClass?: string;
}

const uiSectionTitle = (props: IProps): HTMLHeadingElement => {
  const sectionTitle = document.createElement('h1');
  sectionTitle.textContent = `${props.text} (${props.count})`;
  sectionTitle.classList.add('section__title');
  if (props.customClass) sectionTitle.classList.add(props.customClass);

  return sectionTitle;
};

export default uiSectionTitle;
