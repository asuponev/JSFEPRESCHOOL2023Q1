import { HTMLElements, ICar, IElement, IWinner } from '../types/types';

const state = {
  cars: {
    items: [] as ICar[],
    count: 0,
    page: 1,
    fetchError: '',
    addItems: (newCars: ICar[]): void => {
      state.cars.items.push(...newCars);
      state.cars.count += newCars.length;
    },
    removeItem: (carId: number): void => {
      state.cars.items = state.cars.items.filter((item) => item.id !== carId);
      state.cars.count -= 1;
      state.html.getElement(`car-${carId}`)?.remove();
      state.html.elements = state.html.elements.filter(
        (item) => item.id !== `car-${carId}`
      );

      const garageTitle = state.html.getElement('garage-title');
      if (garageTitle) garageTitle.textContent = `Garage (${state.cars.count})`;
    },
    updateItem: (car: ICar): void => {
      state.cars.items.forEach((item, idx) => {
        if (item.id === car.id) {
          state.cars.items[idx] = car;
        }
      });
    },
  },
  winners: {
    items: [] as IWinner[],
    count: 0,
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
