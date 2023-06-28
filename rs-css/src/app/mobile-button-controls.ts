import { BTN_CLOSE, BTN_OPEN, SIDEBAR } from '../constants/elements';

export default class MobileButtonControls {
  private sidebar: HTMLDivElement | null;
  private btnOpenLevels: HTMLButtonElement | null;
  private btnCloseLevels: HTMLButtonElement | null;

  constructor() {
    this.sidebar = SIDEBAR;
    this.btnOpenLevels = BTN_OPEN;
    this.btnCloseLevels = BTN_CLOSE;

    this.btnOpenLevels?.addEventListener('click', () => this.onOpen());
    this.btnCloseLevels?.addEventListener('click', () => this.onClose());
  }

  private onOpen() {
    this.sidebar?.classList.add('open');
  }

  private onClose() {
    this.sidebar?.classList.remove('open');
  }
}
