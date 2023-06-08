import { Source } from '../../../types/index';
import './sources.css';

class Sources {
  draw(data: Source[]) {
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

    const sourcesBlock: HTMLDivElement | null = document.querySelector('.sources');
    if (sourcesBlock) sourcesBlock.append(fragment);
  }
}

export default Sources;
