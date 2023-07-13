import { ICar } from '../../../types/types';
import onStartOneCar from '../../../actions/onStartOneCar';
import onStopOneCar from '../../../actions/onStopOneCar';
import baseButton from '../../base/button/button';
import carIconView from '../car-icon/car-icon';
import carsState from '../../../state/carsState';

const carRoadView = (car: ICar): HTMLDivElement => {
  const carRoad = document.createElement('div');
  carRoad.classList.add('car__road');
  // create buttons for motion control
  const roadButtons = document.createElement('div');
  roadButtons.classList.add('car__road__buttons');
  const btnDrive = baseButton({
    text: 'D',
    customClass: 'button--drive',
    disabled: false,
  });
  const btnStop = baseButton({
    text: 'R',
    customClass: 'button--stop',
    disabled: true,
  });
  roadButtons.append(btnDrive, btnStop);
  // create car icon
  const roadCarIcon = carIconView(car.color);
  roadCarIcon.id = `car-icon-${car.id}`;
  // create finish element
  const roadFinishIcon = document.createElement('div');
  roadFinishIcon.classList.add('car__road__finish');

  roadFinishIcon.textContent = 'FINISH';

  const startCar = (): Promise<{ id: number; time: number | null }> => {
    return onStartOneCar(
      car.id,
      roadCarIcon,
      roadFinishIcon,
      btnDrive,
      btnStop
    );
  };

  const stopCar = (): Promise<void> => {
    return onStopOneCar(car.id, roadCarIcon, btnDrive, btnStop);
  };

  // add listeners
  btnDrive.addEventListener('click', startCar);
  btnStop.addEventListener('click', stopCar);

  // add actions to state
  carsState.actions[car.id] = startCar;
  carsState.resets[car.id] = stopCar;

  carRoad.append(roadButtons, roadCarIcon, roadFinishIcon);

  return carRoad;
};

export default carRoadView;
