import { startCarEngine } from '../api/requests';
import addCarAnimate from '../services/addCarAnimate';
import getDistanceFromCarToFinish from '../services/getDistanceFromCarToFinish';
import carStore from '../store/carStore';
import moveState from '../store/moveState';
import onDriveMode from './onDriveMode';

const onStartOneCar = async (
  id: number,
  carElement: HTMLDivElement,
  finishElement: HTMLDivElement,
  btnDrive: HTMLButtonElement,
  btnStop: HTMLButtonElement
): Promise<{ id: number; time: number | null }> => {
  btnDrive.disabled = true;
  carStore.dispatch({ type: 'ON_RACE_MODE' });
  const { velocity, distance } = await startCarEngine(id);
  moveState.addStartedEngine(id);

  const timeMs = Math.round(distance / velocity);
  const distancePx = getDistanceFromCarToFinish(carElement, finishElement);

  const animate = addCarAnimate(carElement, distancePx, timeMs);
  moveState.addAnimation(animate);

  btnStop.disabled = false;

  const { success } = await onDriveMode(id, carElement, animate);

  if (!success) return { id, time: null };
  return { id, time: timeMs };
};

export default onStartOneCar;
