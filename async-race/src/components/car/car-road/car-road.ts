import carStore from '../../../store/carStore';
import actionsStore from '../../../store/actionsStore';
import onStartOneCar from '../../../actions/onStartOneCar';
import onStopOneCar from '../../../actions/onStopOneCar';
import baseButton from '../../base/button/button';
import carIconView from '../car-icon/car-icon';
import { ICar } from '../../../types/types';

const carRoadView = ({ id, name, color }: ICar): HTMLDivElement => {
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

  // create winner message element
  const winnerMessage = document.createElement('div');
  winnerMessage.classList.add('car__road__message');
  winnerMessage.textContent = `winner: ${name} #${id}`;

  // create actions for start and stop car with the necessary arguments
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

  // subscription to state changes
  carStore.subscribe((state) => {
    const foundCar = state.items.find((item) => item.id === id);
    if (foundCar && foundCar.color !== color) {
      roadCarIcon.innerHTML = carIconView(foundCar.color);
    }

    if (state.currentRaceWinner === id) {
      winnerMessage.classList.add('display');
      roadCarIcon.classList.remove('car__icon--finished');
      roadCarIcon.classList.add('car__icon--winner');
    } else {
      winnerMessage.classList.remove('display');
      roadCarIcon.classList.remove('car__icon--winner');
    }
  });

  carRoad.append(roadButtons, roadCarIcon, roadFinishIcon, winnerMessage);
  return carRoad;
};

export default carRoadView;
