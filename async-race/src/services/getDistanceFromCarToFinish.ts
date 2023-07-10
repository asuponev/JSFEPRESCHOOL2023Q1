export default function getDistanceFromCarToFinish(
  car: HTMLElement,
  finish: HTMLElement
): number {
  const leftSideCar = car.getBoundingClientRect().left;
  const rightSideFinish = finish.getBoundingClientRect().right;

  return rightSideFinish - leftSideCar;
}
