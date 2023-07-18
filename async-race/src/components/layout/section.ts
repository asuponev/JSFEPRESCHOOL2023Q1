import carStore from '../../store/carStore';
import winnersStore from '../../store/winnersStore';
import paginationView from '../base/pagination/pagination';
import './section.scss';

const sectionLayout = (id: string): HTMLElement => {
  const section = document.createElement('section');
  section.classList.add('section', id, 'hidden');

  const sectionTitle = document.createElement('h1');
  sectionTitle.classList.add('section__title');
  const sectionName = id.charAt(0).toUpperCase() + id.slice(1);

  const pagination = paginationView(id);

  section.append(sectionTitle, pagination);

  carStore.subscribe((state) => {
    if (id === 'garage') {
      sectionTitle.textContent = `${sectionName} (${state.count})`;
    }
  });

  winnersStore.subscribe((state) => {
    if (id === 'winners') {
      sectionTitle.textContent = `${sectionName} (${state.count})`;
    }
  });

  return section;
};

export default sectionLayout;
