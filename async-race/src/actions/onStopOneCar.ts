import { stopCarEngine } from '../api/requests';
import moveState from '../state/moveState';

const onStopOneCar = async (
  id: number,
  car: HTMLDivElement,
  btnDrive: HTMLButtonElement,
  btnStop: HTMLButtonElement
): Promise<void> => {
  try {
    btnStop.disabled = true;

    await stopCarEngine(id);
    moveState.removeStoppedEngine(id);

    moveState.stopAnimation(`animate-${car.id}`);
    moveState.removeAnimation(`animate-${car.id}`);

    car.classList.remove('car__icon--broken', 'car__icon--finished');

    btnDrive.disabled = false;
  } catch (error) {
    console.log(error);
  }
};

export default onStopOneCar;
