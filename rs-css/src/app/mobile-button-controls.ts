import { BTN_CLOSE, BTN_OPEN, SIDEBAR } from '../constants/elements';

export default class MobileButtonControls {
  private sidebar: HTMLDivElement | null;
  private btnOpenLevels: HTMLButtonElement | null;
  private btnCloseLevels: HTMLButtonElement | null;

  constructor() {
    this.sidebar = SIDEBAR;
    this.btnOpenLevels = BTN_OPEN;
    this.btnCloseLevels = BTN_CLOSE;

    this.btnOpenLevels?.addEventListener('click', (): void => this.onOpen());
    this.btnCloseLevels?.addEventListener('click', (): void => this.onClose());
  }

  private onOpen(): void {
    this.sidebar?.classList.add('open');
  }

  private onClose(): void {
    this.sidebar?.classList.remove('open');
  }
}
