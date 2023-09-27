import { ISources, IArticles, Endpoint } from '../../types/index';
import AppLoader from './appLoader';

class AppController extends AppLoader {
  getSources(callback: (data: Readonly<ISources>) => void): void {
    super.getResp(
      {
        endpoint: Endpoint.sources,
      },
      callback
    );
  }

  getNews(e: MouseEvent, callback: (data: Readonly<IArticles>) => void): void {
    let target = e.target;
    const newsContainer = e.currentTarget;

    while (
      target &&
      target instanceof HTMLElement &&
      newsContainer instanceof HTMLElement &&
      target !== newsContainer
    ) {
      if (target.classList.contains('source__item')) {
        const sourceId = target.getAttribute('data-source-id');
        if (sourceId && newsContainer.getAttribute('data-source') !== sourceId) {
          newsContainer.setAttribute('data-source', sourceId);
          super.getResp(
            {
              endpoint: Endpoint.everything,
              options: {
                sources: sourceId,
              },
            },
            callback
          );
        }
        return;
      }
      target = target.parentNode;
    }
  }
}

export default AppController;
