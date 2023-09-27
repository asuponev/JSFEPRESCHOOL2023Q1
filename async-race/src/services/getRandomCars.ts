import carNames from '../constants/cars-names';
import { ICar } from '../types/types';

export default function generateCars(length: number): Omit<ICar, 'id'>[] {
  const getName = (): string => {
    const { brands, models } = carNames;
    const brand = brands[Math.floor(Math.random() * brands.length)];
    const model = models[Math.floor(Math.random() * models.length)];
    return `${brand} ${model}`;
  };

  const getColor = (): string => {
    const letters = '0123456789ABCDEF';
    return Array.from({ length: 6 }).reduce<string>((color) => {
      return color + letters[Math.floor(Math.random() * 16)];
    }, '#');
  };

  return Array.from({ length }, () => ({
    name: getName(),
    color: getColor(),
  }));
}
