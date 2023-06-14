import { IArticle } from '../../../types/index';
import './news.css';

class News {
  draw(data: IArticle[]): void {
    const news = data.length >= 10 ? data.filter((_item, idx) => idx < 10) : data;

    const fragment = document.createDocumentFragment();
    const newsItemTemp = document.querySelector('#newsItemTemp') as HTMLTemplateElement;

    news.forEach((item, idx) => {
      const newsClone = newsItemTemp.content.cloneNode(true);
      if (!(newsClone instanceof DocumentFragment)) {
        throw new Error();
      }
      if (idx % 2) newsClone.querySelector('.news__item')?.classList.add('alt');

      const newsMetaPhoto: HTMLDivElement | null = newsClone.querySelector('.news__meta-photo');
      if (newsMetaPhoto) newsMetaPhoto.style.backgroundImage = `url(${item.urlToImage || 'img/news_placeholder.jpg'})`;

      const newsMetaAuthor: HTMLLIElement | null = newsClone.querySelector('.news__meta-author');
      if (newsMetaAuthor) newsMetaAuthor.textContent = item.author || item.source.name;

      const newsMetaDate: HTMLLIElement | null = newsClone.querySelector('.news__meta-date');
      if (newsMetaDate) newsMetaDate.textContent = item.publishedAt.slice(0, 10).split('-').reverse().join('-');

      const newsDescriptionTitle: HTMLHeadingElement | null = newsClone.querySelector('.news__description-title');
      if (newsDescriptionTitle) newsDescriptionTitle.textContent = item.title;

      const newsDescriptionSource: HTMLHeadingElement | null = newsClone.querySelector('.news__description-source');
      if (newsDescriptionSource) newsDescriptionSource.textContent = item.source.name;

      const newsDescriptionContent: HTMLParagraphElement | null = newsClone.querySelector('.news__description-content');
      if (newsDescriptionContent) newsDescriptionContent.textContent = item.description;

      const newsReadMoreLink: HTMLLinkElement | null = newsClone.querySelector('.news__read-more a');
      if (newsReadMoreLink) newsReadMoreLink.setAttribute('href', item.url);

      fragment.append(newsClone);
    });

    const newsBlock: HTMLElement | null = document.querySelector('.news');
    if (newsBlock) {
      newsBlock.textContent = fragment.children.length ? '' : 'No news from this source';
      newsBlock.appendChild(fragment);
    }
  }
}

export default News;
