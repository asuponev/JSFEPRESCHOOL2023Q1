export default class HoverControls {
  constructor() {
    this.hoverElement();
    this.hoverLine();
  }

  private hoverElement() {
    const elements: NodeListOf<HTMLElement> =
      document.querySelectorAll('[data-html-element');
    elements.forEach((element) => {
      element.addEventListener('mouseover', () =>
        this.mouseOverElement(element)
      );
      element.addEventListener('mouseleave', () => {
        this.mouseLeaveElement(element);
      });
    });
  }

  private hoverLine() {
    const lines: NodeListOf<HTMLElement> =
      document.querySelectorAll('[data-html-line');

    lines.forEach((line) => {
      line.addEventListener('mouseover', () => {
        this.mouseOverLine(line);
      });

      line.addEventListener('mouseleave', () => {
        this.mouseLeaveLine(line);
      });
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
