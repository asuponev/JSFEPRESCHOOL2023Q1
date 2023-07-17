import { stopCarEngine } from '../api/requests';
import htmlState from '../state/htmlState';
import moveState from '../state/moveState';

const onStopOneCar = async (
  id: number,
  car: HTMLDivElement,
  btnDrive: HTMLButtonElement,
  btnStop: HTMLButtonElement
): Promise<void> => {
  try {
    const btnRace = htmlState.getElementById('btn-race') as HTMLButtonElement;
    btnStop.disabled = true;

    await stopCarEngine(id);
    moveState.removeStoppedEngine(id);

    moveState.stopAnimation(`animate-${car.id}`);
    moveState.removeAnimation(`animate-${car.id}`);

    car.classList.remove('car__icon--broken', 'car__icon--finished');

    btnDrive.disabled = false;
    if (btnRace && moveState.startedEngine.length === 0) {
      btnRace.disabled = false;
    }
  } catch (error) {
    console.log(error);
  }
};

export default onStopOneCar;
