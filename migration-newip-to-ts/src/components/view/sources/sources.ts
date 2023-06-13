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

    const sourcesContent: HTMLElement | null = document.querySelector('.sources__content');
    const sourcesInfo: HTMLElement | null = document.querySelector('.sources__info');
    const newsBlock: HTMLElement | null = document.querySelector('.news');
    if (sourcesInfo && newsBlock) {
      sourcesInfo.textContent = fragment ? `Total sources ${data.length}` : 'Sources not loaded';
      newsBlock.textContent = fragment ? 'Click on any source to display news' : 'News not loaded';
      sourcesContent?.append(fragment);
    }
  }

  clear() {
    const sourcesContent: HTMLDivElement | null = document.querySelector('.sources__content');
    if (sourcesContent) sourcesContent.innerHTML = '';
  }
}

export default Sources;
