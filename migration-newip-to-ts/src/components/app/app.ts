import AppController from '../controller/controller';
import AppView from '../view/appView';

class App {
  private controller: AppController;
  private view: AppView;
  private isOpenMobileSourses = false;

  constructor() {
    this.controller = new AppController();
    this.view = new AppView();
  }

  start(): void {
    const sourcesBlock: HTMLDivElement | null = document.querySelector('.sources');
    const sourcesContent: HTMLDivElement | null = document.querySelector('.sources__content');
    const selectElementCategory: HTMLSelectElement | null = document.querySelector('#selectCategory');
    const resetBtn: HTMLButtonElement | null = document.querySelector('#resetBtn');
    const menuBtn: HTMLButtonElement | null = document.querySelector('#menuBtn');
    const closeBtn: HTMLButtonElement | null = document.querySelector('#closeBtn');

    this.controller.getSources((data) => this.view.drawFilters(data.sources));
    this.controller.getSources((data) => this.view.drawSources(data.sources));
    selectElementCategory?.addEventListener('change', (e) => this.drawFilteredSources(e));
    sourcesContent?.addEventListener('click', (e) => this.controller.getNews(e, (data) => this.view.drawNews(data)));
    resetBtn?.addEventListener('click', () => this.resetSelectedCategory(selectElementCategory));
    menuBtn?.addEventListener('click', () => this.onOpenMobileSources(sourcesBlock, menuBtn));
    closeBtn?.addEventListener('click', () => this.onCloseMobileSources(sourcesBlock, menuBtn));
  }

  private drawFilteredSources(e: Event): void {
    let selectedCategory: string;
    if (e.target instanceof HTMLSelectElement) {
      selectedCategory = e.target.value;
      if (selectedCategory) {
        this.view.clearSources();
        this.controller.getSources((data) => {
          const values = data.sources.filter((item) => item.category === selectedCategory);
          this.view.drawSources(values);
        });
      }
    }
  }

  private resetSelectedCategory(selector: HTMLSelectElement | null): void {
    if (selector) {
      selector.value = '';
      this.view.clearSources();
      this.controller.getSources((data) => this.view.drawSources(data.sources));
    }
  }

  private onOpenMobileSources(selectorSources: HTMLDivElement | null, menuBtn: HTMLButtonElement | null): void {
    if (!this.isOpenMobileSourses) {
      selectorSources?.classList.add('open');
      menuBtn?.classList.add('hidden');
      this.isOpenMobileSourses = true;
    }
  }

  private onCloseMobileSources(selectorSources: HTMLDivElement | null, menuBtn: HTMLButtonElement | null): void {
    if (this.isOpenMobileSourses) {
      selectorSources?.classList.remove('open');
      menuBtn?.classList.remove('hidden');
      this.isOpenMobileSourses = false;
    }
  }
}

export default App;
