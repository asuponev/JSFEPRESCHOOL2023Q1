import { stopCarEngine } from '../api/requests';
import state from '../state/state';

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
    state.engine.removeStoppedEngine(id);

    state.driveCar.stopAnimation(`animate-${car.id}`);
    state.driveCar.removeAnimation(`animate-${car.id}`);

    car.classList.remove('car__icon--broken', 'car__icon--finished');

    btnDrive.disabled = false;
  } catch (error) {
    console.log(error);
  }
};

export default onStopOneCar;
