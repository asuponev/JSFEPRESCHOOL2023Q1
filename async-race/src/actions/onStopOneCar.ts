import { stopCarEngine } from '../api/requests';
import moveState from '../state/moveState';

const onStopOneCar = async (
  event: MouseEvent,
  id: number,
  car: HTMLDivElement,
  btnDrive: HTMLButtonElement
): Promise<void> => {
  try {
    const btnStop = event.target as HTMLButtonElement;
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
