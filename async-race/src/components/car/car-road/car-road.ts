import { ICar } from '../../../types/types';
import onStartOneCar from '../../../actions/onStartOneCar';
import onStopOneCar from '../../../actions/onStopOneCar';
import baseButton from '../../base/button/button';
import carIconView from '../car-icon/car-icon';

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
  roadCarIcon.id = `car-${car.id}`;
  // create finish element
  const roadFinishIcon = document.createElement('div');
  roadFinishIcon.classList.add('car__road__finish');
  roadFinishIcon.textContent = 'FINISH';

  // add listeners
  btnDrive.addEventListener('click', (event) =>
    onStartOneCar(event, car.id, roadCarIcon, roadFinishIcon, btnStop)
  );
  btnStop.addEventListener('click', (event) =>
    onStopOneCar(event, car.id, roadCarIcon, btnDrive)
  );

  carRoad.append(roadButtons, roadCarIcon, roadFinishIcon);

  return carRoad;
};

export default carRoadView;
