import { ICar } from '../types/types';

interface ICarState {
  items: ICar[];
  actions: Record<string, () => Promise<{ id: number; time: number | null }>>;
  resets: Record<string, () => Promise<void>>;
  count: number;
  page: number;
  fetchError: string;
  addItems: (cars: ICar[]) => void;
  removeItem: (carId: number) => void;
  updateItem: (car: ICar) => void;
  nextPage: () => void;
  prevPage: () => void;
}

const carsState: ICarState = {
  items: [],
  actions: {},
  resets: {},
  count: 0,
  page: 1,
  fetchError: '',
  addItems: (newCars: ICar[]): void => {
    carsState.items.push(...newCars);
    carsState.count += newCars.length;
  },
  removeItem: (carId: number): void => {
    carsState.items = carsState.items.filter((item) => item.id !== carId);
    carsState.count -= 1;
  },
  updateItem: (car: ICar): void => {
    carsState.items.forEach((item, index) => {
      if (item.id === car.id) {
        carsState.items[index] = car;
      }
    });
  },
  nextPage: (): void => {
    if (
      carsState.count > 7 ||
      carsState.page < Math.ceil(carsState.count / 7)
    ) {
      carsState.page += 1;
    }
  },
  prevPage: (): void => {
    if (carsState.page > 1) {
      carsState.page -= 1;
    }
  },
};

export default carsState;
