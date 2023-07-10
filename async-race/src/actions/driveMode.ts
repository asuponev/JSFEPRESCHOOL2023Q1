import { enableDriveMode } from '../api/requests';
import state from '../state/state';

const driveMode = async (
  id: number,
  car: HTMLDivElement,
  animate: Animation
): Promise<void> => {
  try {
    await enableDriveMode(id);

    if (await animate.finished) {
      car.classList.add('car__icon--finished');
    }
  } catch (error) {
    console.log(error);
    animate.pause();
    if (state.engine.isEngineStarts(id)) {
      car.classList.add('car__icon--broken');
    }
  }
};

export default driveMode;
