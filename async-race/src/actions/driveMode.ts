import { enableDriveMode } from '../api/requests';
import moveState from '../state/moveState';
import { IEngineStatus } from '../types/types';

const driveMode = async (
  id: number,
  car: HTMLDivElement,
  animate: Animation
): Promise<IEngineStatus> => {
  try {
    const data = await enableDriveMode(id);

    if (await animate.finished) {
      car.classList.add('car__icon--finished');
    }
    return data;
  } catch (error) {
    console.log(error);
    animate.pause();
    if (moveState.isEngineStarts(id)) {
      car.classList.add('car__icon--broken');
    }
    return { success: false };
  }
};

export default driveMode;
