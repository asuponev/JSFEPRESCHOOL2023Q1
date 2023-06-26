export default class MobileButtonControls {
  constructor(
    private sidebar: HTMLElement,
    private btnOpenLevels: HTMLElement,
    private btnCloseLevels: HTMLElement
  ) {
    this.btnOpenLevels.addEventListener('click', () => this.onOpen());
    this.btnCloseLevels.addEventListener('click', () => this.onClose());
  }

  private onOpen() {
    this.sidebar.classList.add('open');
  }

  private onClose() {
    this.sidebar.classList.remove('open');
  }
}
