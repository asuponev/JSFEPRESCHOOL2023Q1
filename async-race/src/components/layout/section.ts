import htmlState from '../../state/htmlState';
import paginationView from '../base/pagination/pagination';
import './section.scss';

interface IProps {
  id: string;
  count: number;
  page: number;
}

const sectionLayout = ({ id, count, page }: IProps): HTMLElement => {
  const section = document.createElement('section');
  section.classList.add('section', id, 'hidden');

  const sectionTitle = document.createElement('h1');
  sectionTitle.classList.add('section__title');
  const sectionName = id.charAt(0).toUpperCase() + id.slice(1);
  sectionTitle.textContent = `${sectionName} (${count})`;
  htmlState.addToElements(`${id}-title`, sectionTitle);

  const pagination = paginationView({
    id: `pagination-title-${id}`,
    page,
  });

  section.append(sectionTitle, pagination);

  return section;
};

export default sectionLayout;
