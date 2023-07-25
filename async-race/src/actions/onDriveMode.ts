import { enableDriveMode } from '../services/apiEngine';
import moveState from '../store/moveState';
import { IEngineStatus } from '../types/types';

const onDriveMode = async (
  id: number,
  car: HTMLDivElement,
  animate: Animation
): Promise<IEngineStatus> => {
  try {
    const data = await enableDriveMode(id);

    if (await animate.finished) {
      car.classList.add('car__icon--finished');
      car.classList.remove('car__icon--broken');
    }
    return data;
  } catch {
    console.log(`Car #${id} is broken`);
    animate.pause();
    if (moveState.isEngineStarts(id)) {
      car.classList.add('car__icon--broken');
    }
    return { success: false };
  }
};

export default onDriveMode;
