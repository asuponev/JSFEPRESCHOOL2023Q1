import carStore from '../../../store/carStore';
import actionsStore from '../../../store/actionsStore';
import onStartOneCar from '../../../actions/onStartOneCar';
import onStopOneCar from '../../../actions/onStopOneCar';
import baseButton from '../../base/button/button';
import carIconView from '../car-icon/car-icon';
import { ICar } from '../../../types/types';

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
  const roadCarIcon = document.createElement('div');
  roadCarIcon.classList.add('car__icon');
  roadCarIcon.id = `car-icon-${id}`;
  roadCarIcon.innerHTML = carIconView(color);
  // create finish element
  const roadFinishIcon = document.createElement('div');
  roadFinishIcon.classList.add('car__road__finish');
  roadFinishIcon.textContent = 'FINISH';

  const winnerMessage = document.createElement('div');
  winnerMessage.classList.add('car__road__message');
  winnerMessage.textContent = `winner: ${name} #${id}`;

  const startCar = (): Promise<{ id: number; time: number | null }> => {
    return onStartOneCar(id, roadCarIcon, roadFinishIcon, btnDrive, btnStop);
  };

  const stopCar = (): Promise<void> => {
    return onStopOneCar(id, roadCarIcon, btnDrive, btnStop);
  };

  // add listeners
  btnDrive.addEventListener('click', startCar);
  btnStop.addEventListener('click', stopCar);

  // add actions to store
  actionsStore.actions[id] = startCar;
  actionsStore.resets[id] = stopCar;

  carRoad.append(roadButtons, roadCarIcon, roadFinishIcon, winnerMessage);

  // color change subscription
  carStore.subscribe((state) => {
    const foundCar = state.items.find((item) => item.id === car.id);
    if (foundCar && foundCar.id === car.id && foundCar.color !== car.color) {
      roadCarIcon.innerHTML = carIconView(foundCar.color);
    }

    if (state.currentRaceWinner === car.id) {
      winnerMessage.classList.add('display');
    } else {
      winnerMessage.classList.remove('display');
    }
  });

  return carRoad;
};

export default carRoadView;
