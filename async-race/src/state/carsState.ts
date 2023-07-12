import { ICar } from '../types/types';

interface ICarState {
  items: ICar[];
  count: number;
  page: number;
  fetchError: string;
  addItems: (cars: ICar[]) => void;
  removeItem: (carId: number) => void;
  updateItem: (car: ICar) => void;
}

const carsState: ICarState = {
  items: [],
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
};

export default carsState;
