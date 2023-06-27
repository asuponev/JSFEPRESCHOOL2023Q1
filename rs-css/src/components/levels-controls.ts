import {
  GAME_TABLE,
  GAME_TITLE,
  HTML_VIEWER,
  LEVELS_LIST,
} from '../constants/elements';
import levels from '../data/index';
import getCurrentLevel from '../services/getCurrentLevel';
import getCurrentProgress from '../services/getCurrentProgress';
import { ILevel } from '../types/index';

export default class LevelsControls {
  private elementList: HTMLUListElement | null;
  private elementGameTitle: HTMLHeadingElement | null;
  private elementGameTable: HTMLDivElement | null;
  private elementHTMLViewer: HTMLDivElement | null;
  private currentLevelId: number;
  private currentProgress: number[];

  constructor() {
    this.elementList = LEVELS_LIST;
    this.elementGameTitle = GAME_TITLE;
    this.elementGameTable = GAME_TABLE;
    this.elementHTMLViewer = HTML_VIEWER;
    this.currentLevelId = getCurrentLevel();
    this.currentProgress = getCurrentProgress();
  }

  public init() {
    const fragment = document.createDocumentFragment();
    levels.forEach((level: ILevel) => {
      const levelItem = document.createElement('li');
      levelItem.classList.add('level');
      levelItem.dataset.levelId = `${level.id}`;

      levelItem.innerHTML = `
        <img src="./svg/check.svg" alt="icon" class="level__icon" />
        <span class="level__number">${level.id}</span>
        <span class="level__title">${level.title}</span>
      `;

      levelItem.addEventListener('click', () => this.setLevel(level.id));
      fragment.append(levelItem);
    });

    this.elementList?.append(fragment);
    this.setProgress();
    this.setLevel(this.currentLevelId);
  }

  public setLevel(levelId: number): void {
    if (levelId <= levels.length) {
      this.clearPrevLevel();
      const currentLevelElement = this.elementList?.querySelector(
        `[data-level-id='${levelId}']`
      );
      currentLevelElement?.classList.add('level--current');

      this.saveCurrentLevel(levelId);
      this.setGameTitle(levelId);
      this.setGameTable(levelId);
      this.setHtmlViewer(levelId);
      this.setProgress();
    }
  }

  private saveCurrentLevel(levelId: number) {
    localStorage.setItem('cur_lvl_rs_css', `${levelId}`);
  }

  private setGameTitle(levelId: number) {
    if (this.elementGameTitle) {
      this.elementGameTitle.textContent = levels[levelId - 1].title;
    }
  }

  private setGameTable(levelId: number) {
    if (this.elementGameTable) {
      this.elementGameTable.innerHTML = levels[levelId - 1].markup;
    }
  }

  private setHtmlViewer(levelId: number) {
    const fragment = document.createDocumentFragment();
    const strings = levels[levelId - 1].markup.trim().split('\n');
    strings.forEach((string) => {
      const span = document.createElement('span');
      span.textContent = string;

      fragment.append(span);
    });
    this.elementHTMLViewer?.append(fragment);
  }

  private setProgress() {
    this.currentProgress.forEach((levelId) => {
      const levelElement = this.elementList?.querySelector(
        `[data-level-id='${levelId}']`
      );
      levelElement?.classList.add('level--done');
    });
  }

  private clearPrevLevel(): void {
    const levels = this.elementList?.querySelectorAll('[data-level-id]');
    levels?.forEach((item) => {
      item.classList.remove('level--current');
    });

    if (this.elementHTMLViewer) this.elementHTMLViewer.innerHTML = '';
  }
}
