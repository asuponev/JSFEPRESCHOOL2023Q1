import { HTMLElements, IElement } from '../types/types';

interface IHtmlState {
  elements: IElement[];
  currentSelectCar: HTMLButtonElement | null;
  addToElements: (id: string, element: HTMLElements) => void;
  removeFromElements: (id: string) => void;
  getElementById: (elementId: string) => HTMLElements | undefined;
  getElementsByIds: (elementIds: string[]) => IElement[];
}

const htmlState: IHtmlState = {
  elements: [],
  currentSelectCar: null,
  addToElements: (id: string, element: HTMLElements): void => {
    htmlState.elements.push({ id, element });
  },
  removeFromElements: (id: string): void => {
    htmlState.elements = htmlState.elements.filter((item) => item.id !== id);
  },
  getElementById: (elementId: string): HTMLElements | undefined => {
    return htmlState.elements.find((item) => item.id === elementId)?.element;
  },
  getElementsByIds: (elementIds: string[]): IElement[] => {
    return htmlState.elements.filter((item) => elementIds.includes(item.id));
  },
};

export default htmlState;
