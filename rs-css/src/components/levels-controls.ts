import levels from '../data/index';
import { ILevel } from '../types/index';

export default class LevelsControls {
  constructor(
    private currentLevel: string,
    private elementList: HTMLElement,
    private elementGameTitle: HTMLElement,
    private elementGameTable: HTMLElement,
    private elementHTMLViewer: HTMLElement
  ) {
    this.createLevelsList();
    this.setLevel(currentLevel);
  }

  private createLevelsList() {
    const fragment = document.createDocumentFragment();

    levels.forEach((level: ILevel) => {
      const levelItem = document.createElement('li');
      levelItem.classList.add('level');
      levelItem.dataset.levelId = level.id;

      levelItem.innerHTML = `
        <img src="./svg/check.svg" alt="icon" class="level__icon" />
        <span class="level__number">${level.id}</span>
        <span class="level__title">${level.title}</span>
      `;

      levelItem.addEventListener('click', () => this.setLevel(level.id));

      fragment.append(levelItem);
    });

    this.elementList.append(fragment);
  }

  private setLevel(levelId: string): void {
    this.clearPrevLevel();
    const currentLevelElement = this.elementList.querySelector(
      `[data-level-id='${levelId}']`
    );
    currentLevelElement?.classList.add('level--current');

    this.saveCurrentLevel(levelId);
    this.setGameTitle(Number(levelId));
    this.setGameTable(Number(levelId));
    this.setHtmlViewer(Number(levelId));
  }

  private saveCurrentLevel(levelId: string) {
    localStorage.setItem('cur_lvl_supo', levelId);
  }

  private setGameTitle(levelId: number) {
    this.elementGameTitle.textContent = levels[levelId - 1].title;
  }

  private setGameTable(levelId: number) {
    this.elementGameTable.innerHTML = levels[levelId - 1].markup;
  }

  private setHtmlViewer(levelId: number) {
    const strings = levels[levelId - 1].markup.trim().split('\n');
    strings.forEach((string) => {
      const span = document.createElement('span');
      span.textContent = string;

      this.elementHTMLViewer.append(span);
    });
  }

  private clearPrevLevel(): void {
    const levels = this.elementList.querySelectorAll('[data-level-id]');
    levels?.forEach((item) => {
      item.classList.remove('level--current');
    });

    this.elementHTMLViewer.innerHTML = '';
  }
}
