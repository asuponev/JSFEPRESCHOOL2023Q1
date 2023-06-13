import AppController from '../controller/controller';
import AppView from '../view/appView';

class App {
  private controller: AppController;
  private view: AppView;

  constructor() {
    this.controller = new AppController();
    this.view = new AppView();
  }

  start() {
    const sourcesBlock: HTMLDivElement | null = document.querySelector('.sources');
    const sourcesContent: HTMLDivElement | null = document.querySelector('.sources__content');
    const selectCategory: HTMLElement | null = document.querySelector('#selectCategory');
    const resetBtn: HTMLButtonElement | null = document.querySelector('#resetBtn');
    const menuBtn: HTMLButtonElement | null = document.querySelector('#menuBtn');

    let isOpenMobileSourses = false;

    if (sourcesContent && selectCategory) {
      this.controller.getSources((data) => this.view.drawFilters(data.sources));
      this.controller.getSources((data) => this.view.drawSources(data.sources));
      selectCategory.addEventListener('change', (e) => {
        const selectedCategory = (e.target as HTMLSelectElement).value;
        if (selectedCategory) {
          this.view.clearSources();
          this.controller.getSources((data) => {
            const values = data.sources.filter((item) => item.category === selectedCategory);
            this.view.drawSources(values);
          });
        }
      });
      sourcesContent.addEventListener('click', (e) => this.controller.getNews(e, (data) => this.view.drawNews(data)));
    }

    if (resetBtn && selectCategory) {
      resetBtn.addEventListener('click', () => {
        (selectCategory as HTMLSelectElement).value = '';
        this.view.clearSources();
        this.controller.getSources((data) => this.view.drawSources(data.sources));
      });
    }

    if (sourcesBlock) {
      menuBtn?.addEventListener('click', () => {
        if (isOpenMobileSourses) {
          sourcesBlock.style.right = '0';
          menuBtn.textContent = 'CLOSE SOURCES';
        } else {
          sourcesBlock.removeAttribute('style');
          menuBtn.textContent = 'OPEN SOURCES';
        }
        isOpenMobileSourses = !isOpenMobileSourses;
      });
    }
  }
}

export default App;
