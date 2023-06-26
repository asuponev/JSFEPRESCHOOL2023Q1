export default function getElement(selector: string): HTMLElement | null {
  return document.querySelector(selector);
}
