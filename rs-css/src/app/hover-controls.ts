export default class HoverControls {
  constructor() {
    this.addTooltip();
    this.hoverElement();
    this.hoverLine();
  }

  private addTooltip() {
    const elements: NodeListOf<HTMLElement> =
      document.querySelectorAll('circle, square');

    elements.forEach((element) => {
      const tooltip = document.createElement('span');
      tooltip.classList.add('tooltip');
      const idx = element.getAttribute('data-html-element');
      const markup = document.querySelectorAll(`[data-html-line='${idx}']`);
      let text = '';
      markup.forEach((item) => {
        text += item.textContent;
      });
      tooltip.textContent = text;
      element.append(tooltip);
    });
  }

  private hoverElement() {
    const elements: NodeListOf<HTMLElement> =
      document.querySelectorAll('[data-html-element');
    elements.forEach((el) => {
      el.addEventListener('mouseover', () => this.mouseOverElement(el));
      el.addEventListener('mouseleave', () => this.mouseLeaveElement(el));
    });
  }

  private hoverLine() {
    const lines: NodeListOf<HTMLElement> =
      document.querySelectorAll('[data-html-line');

    lines.forEach((line) => {
      line.addEventListener('mouseover', () => this.mouseOverLine(line));

      line.addEventListener('mouseleave', () => this.mouseLeaveLine(line));
    });
  }

  private mouseOverElement(element: HTMLElement) {
    const idx = element.dataset.htmlElement;
    const lines = document.querySelectorAll(`[data-html-line='${idx}']`);
    lines.forEach((line) => {
      line.classList.add('highlighted');
    });
  }

  private mouseLeaveElement(element: HTMLElement) {
    const idx = element.dataset.htmlElement;
    const lines = document.querySelectorAll(`[data-html-line='${idx}']`);
    lines.forEach((line) => {
      line.classList.remove('highlighted');
    });
  }

  private mouseOverLine(line: HTMLElement) {
    const idx = line.dataset.htmlLine;
    const element = document.querySelector(`[data-html-element='${idx}']`);
    element?.classList.add('hovered');
  }

  private mouseLeaveLine(line: HTMLElement) {
    const idx = line.dataset.htmlLine;
    const element = document.querySelector(`[data-html-element='${idx}']`);
    element?.classList.remove('hovered');
  }
}
