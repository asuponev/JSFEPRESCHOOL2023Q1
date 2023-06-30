export default class HoverControls {
  constructor() {
    this.addTooltip();
    this.hoverElement();
    this.hoverLine();
  }

  private addTooltip(): void {
    const elements: NodeListOf<HTMLElement> =
      document.querySelectorAll('circle, square');

    elements.forEach((element: HTMLElement): void => {
      const tooltip = document.createElement('span');
      tooltip.classList.add('tooltip');
      const idx = element.getAttribute('data-html-element');
      const markup = document.querySelectorAll(`[data-html-line='${idx}']`);
      let text = '';
      markup.forEach((item): void => {
        text += item.textContent;
      });
      tooltip.textContent = text;
      element.append(tooltip);
    });
  }

  private hoverElement(): void {
    const elements: NodeListOf<HTMLElement> =
      document.querySelectorAll('[data-html-element');
    elements.forEach((el: HTMLElement): void => {
      el.addEventListener('mouseover', () => this.mouseOverElement(el));
      el.addEventListener('mouseleave', () => this.mouseLeaveElement(el));
    });
  }

  private hoverLine(): void {
    const lines: NodeListOf<HTMLElement> =
      document.querySelectorAll('[data-html-line');

    lines.forEach((line: HTMLElement): void => {
      line.addEventListener('mouseover', () => this.mouseOverLine(line));

      line.addEventListener('mouseleave', () => this.mouseLeaveLine(line));
    });
  }

  private mouseOverElement(element: HTMLElement): void {
    const idx = element.dataset.htmlElement;
    const lines = document.querySelectorAll(`[data-html-line='${idx}']`);
    lines.forEach((line): void => {
      line.classList.add('highlighted');
    });
  }

  private mouseLeaveElement(element: HTMLElement): void {
    const idx = element.dataset.htmlElement;
    const lines = document.querySelectorAll(`[data-html-line='${idx}']`);
    lines.forEach((line): void => {
      line.classList.remove('highlighted');
    });
  }

  private mouseOverLine(line: HTMLElement): void {
    const idx = line.dataset.htmlLine;
    const element = document.querySelector(`[data-html-element='${idx}']`);
    element?.classList.add('hovered');
  }

  private mouseLeaveLine(line: HTMLElement): void {
    const idx = line.dataset.htmlLine;
    const element = document.querySelector(`[data-html-element='${idx}']`);
    element?.classList.remove('hovered');
  }
}
