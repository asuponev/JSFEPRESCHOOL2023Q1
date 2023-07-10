import { startCarEngine } from '../api/requests';
import addCarAnimate from '../services/addCarAnimate';
import getDistanceFromCarToFinish from '../services/getDistanceFromCarToFinish';
import state from '../state/state';
import driveMode from './driveMode';

const onStartOneCar = async (
  event: MouseEvent,
  id: number,
  carElement: HTMLDivElement,
  finishElement: HTMLDivElement,
  btnStop: HTMLButtonElement
): Promise<void> => {
  try {
    const btnDrive = event.target as HTMLButtonElement;
    btnDrive.disabled = true;

    const { velocity, distance } = await startCarEngine(id);
    state.engine.addStartedEngine(id);

    const timeMs = Math.round(distance / velocity);
    const distancePx = getDistanceFromCarToFinish(carElement, finishElement);

    const animate = addCarAnimate(carElement, distancePx, timeMs);
    state.driveCar.addAnimation(animate);

    btnStop.disabled = false;

    await driveMode(id, carElement, animate);
  } catch (error) {
    console.log(error);
  }
};

export default onStartOneCar;
