import { ISources, IArticles } from '../../types/index';
import AppLoader from './appLoader';

class AppController extends AppLoader {
  getSources(callback: (data: ISources) => void) {
    super.getResp(
      {
        endpoint: 'sources',
      },
      callback
    );
  }

  getNews(e: Event, callback: (data: IArticles) => void) {
    let target = e.target;
    const newsContainer = e.currentTarget as HTMLElement;

    while (newsContainer && target && target instanceof HTMLElement && target !== newsContainer) {
      if (target.classList.contains('source__item')) {
        const sourceId = target.getAttribute('data-source-id');
        if (sourceId && newsContainer.getAttribute('data-source') !== sourceId) {
          newsContainer.setAttribute('data-source', sourceId);
          super.getResp(
            {
              endpoint: 'everything',
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
