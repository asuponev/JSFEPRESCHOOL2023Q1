import htmlState from '../../state/htmlState';

const updateSectionTitle = (id: string, count: number): void => {
  const sectionTitle = htmlState.getElementById(id);
  if (sectionTitle) sectionTitle.textContent = `Garage (${count})`;
};

export default updateSectionTitle;
