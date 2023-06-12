import { ISource } from '../../../types/index';
import './sources.css';

class Sources {
  draw(data: ISource[]) {
    const fragment = document.createDocumentFragment();
    const sourceItemTemp: HTMLTemplateElement | null = document.querySelector('#sourceItemTemp');

    data.forEach((item) => {
      const sourceClone = sourceItemTemp?.content.cloneNode(true);
      if (!(sourceClone instanceof DocumentFragment)) {
        throw new Error();
      }

      const sourceItemName: HTMLSpanElement | null = sourceClone.querySelector('.source__item-name');
      if (sourceItemName) sourceItemName.textContent = item.name;

      const sourceItem: HTMLDivElement | null = sourceClone.querySelector('.source__item');
      if (sourceItem) sourceItem.setAttribute('data-source-id', item.id);

      fragment.append(sourceClone);
    });

    const sourcesBlock: HTMLElement | null = document.querySelector('.sources');
    const newsBlock: HTMLElement | null = document.querySelector('.news');
    if (sourcesBlock && newsBlock) {
      sourcesBlock.textContent = fragment ? '' : 'Sources not loaded';
      newsBlock.textContent = fragment ? 'Click on any source to display news' : 'News not loaded';
      sourcesBlock.append(fragment);
    }
  }
}

export default Sources;
