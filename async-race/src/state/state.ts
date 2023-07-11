import { HTMLElements, ICar, IElement } from '../types/types';

const state = {
  cars: {
    items: [] as ICar[],
    count: '',
    page: 1,
    fetchError: '',
  },
  html: {
    elements: [] as IElement[],
    addToElements: (id: string, element: HTMLElements): void => {
      state.html.elements.push({ id, element });
    },
    getElementsByIds: (elementIds: string[]): IElement[] => {
      return state.html.elements.filter((item) => elementIds.includes(item.id));
    },
    getElement: (elementId: string): HTMLElements | undefined => {
      return state.html.elements.find((item) => item.id === elementId)?.element;
    },
  },
  engine: {
    starts: [] as number[],
    addStartedEngine: (carId: number): void => {
      state.engine.starts.push(carId);
    },
    removeStoppedEngine: (carId: number): void => {
      state.engine.starts = state.engine.starts.filter((id) => id !== carId);
    },
    isEngineStarts: (id: number): boolean => state.engine.starts.includes(id),
  },
  driveCar: {
    animations: [] as Animation[],
    addAnimation: (animation: Animation): void => {
      state.driveCar.animations.push(animation);
    },
    stopAnimation: (animationId: string): void => {
      state.driveCar.animations.forEach((animation) => {
        if (animation.id === animationId) {
          animation.cancel();
        }
      });
    },
    removeAnimation: (animationId: string): void => {
      state.driveCar.animations = state.driveCar.animations.filter(
        (animation) => animation.id !== animationId
      );
    },
  },
};

export default state;
