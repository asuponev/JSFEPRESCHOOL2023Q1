import { ISource } from '../../../types/index';
import './filters.css';

class Filters {
  draw(data: ISource[]): void {
    const selectCategory: HTMLSelectElement | null = document.querySelector('#selectCategory');

    const countries: string[] = [];
    const categories: string[] = [];

    data.forEach((item) => {
      if (!countries.includes(item.country)) {
        countries.push(item.country);
      }
      if (!categories.includes(item.category)) {
        categories.push(item.category);
      }
    });

    const filtersCategories = categories.map((category) => {
      return `
          <option value=${category}>${category}</option>
          `;
    });
    if (selectCategory) selectCategory.innerHTML += filtersCategories.join('');
  }
}

export default Filters;
