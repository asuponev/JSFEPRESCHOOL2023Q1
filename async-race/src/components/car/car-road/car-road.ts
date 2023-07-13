import { ICar } from '../../../types/types';
import onStartOneCar from '../../../actions/onStartOneCar';
import onStopOneCar from '../../../actions/onStopOneCar';
import baseButton from '../../base/button/button';
import carIconView from '../car-icon/car-icon';
import carsState from '../../../state/carsState';
import htmlState from '../../../state/htmlState';

const carRoadView = (car: ICar): HTMLDivElement => {
  const { id, name, color } = car;

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
  const roadCarIcon = carIconView(color);
  roadCarIcon.id = `car-icon-${id}`;
  // create finish element
  const roadFinishIcon = document.createElement('div');
  roadFinishIcon.classList.add('car__road__finish');
  roadFinishIcon.textContent = 'FINISH';

  const winnerMessage = document.createElement('div');
  winnerMessage.classList.add('car__road__message');
  winnerMessage.textContent = `winner: ${name} #${id}`;
  htmlState.addToElements(`winner-car-${id}`, winnerMessage);

  const startCar = (): Promise<{ id: number; time: number | null }> => {
    return onStartOneCar(id, roadCarIcon, roadFinishIcon, btnDrive, btnStop);
  };

  const stopCar = (): Promise<void> => {
    return onStopOneCar(id, roadCarIcon, btnDrive, btnStop);
  };

  // add listeners
  btnDrive.addEventListener('click', startCar);
  btnStop.addEventListener('click', stopCar);

  // add actions to state
  carsState.actions[id] = startCar;
  carsState.resets[id] = stopCar;

  carRoad.append(roadButtons, roadCarIcon, roadFinishIcon, winnerMessage);

  return carRoad;
};

export default carRoadView;
