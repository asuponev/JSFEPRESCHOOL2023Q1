import { IArticles, ISources } from '../../types/index';

import News from './news/news';
import Sources from './sources/sources';

class AppView {
  private news: News;
  private sources: Sources;

  constructor() {
    this.news = new News();
    this.sources = new Sources();
  }

  drawNews(data: IArticles): void {
    const values = data?.articles ? data?.articles : [];
    this.news.draw(values);
  }

  drawSources(data: ISources): void {
    const values = data?.sources ? data?.sources : [];
    this.sources.draw(values);
  }
}

export default AppView;