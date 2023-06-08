import { IArticles, ISources } from '../../types/index';

import News from './news/news';
import Sources from './sources/sources';

export class AppView {
  constructor(public news: News, public sources: Sources) {
    this.news = new News();
    this.sources = new Sources();
  }

  drawNews(data: IArticles) {
    const values = data?.articles ? data?.articles : [];
    this.news.draw(values);
  }

  drawSources(data: ISources) {
    const values = data?.sources ? data?.sources : [];
    this.sources.draw(values);
  }
}

export default AppView;
