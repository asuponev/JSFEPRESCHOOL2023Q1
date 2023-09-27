import { IArticles, ISource } from '../../types/index';

import News from './news/news';
import Sources from './sources/sources';
import Filters from './filters/filters';

class AppView {
  private news: News;
  private sources: Sources;
  private filters: Filters;

  constructor() {
    this.news = new News();
    this.sources = new Sources();
    this.filters = new Filters();
  }

  drawNews(data: IArticles): void {
    const values = data?.articles ? data?.articles : [];
    this.news.draw(values);
  }

  drawSources(data: ISource[]): void {
    const values = data?.length ? data : [];
    this.sources.draw(values);
  }

  drawFilters(data: ISource[]): void {
    const values = data?.length ? data : [];
    this.filters.draw(values);
  }

  clearSources(): void {
    this.sources.clear();
  }
}

export default AppView;
