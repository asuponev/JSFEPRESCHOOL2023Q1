import './car.scss';
import { ICar } from '../../types/types';
import baseButton from '../base/button/button';
import carIconView from './car-icon/car-icon';
import onDeleteCar from '../../actions/onDeleteCar';
import onSelectCar from '../../actions/onSelectCar';
import onStartOneCar from '../../actions/onStartOneCar';
import onStopOneCar from '../../actions/onStopOneCar';

const carView = (props: ICar) => {
  const car = document.createElement('div');
  car.classList.add('car');
  // create buttons for edit and delete car
  const carButtons = document.createElement('div');
  carButtons.classList.add('car__buttons');
  const btnSelect = baseButton({
    text: 'select',
    customClass: 'button--minor',
  });
  const btnDelete = baseButton({
    text: 'delete',
    customClass: 'button--minor',
  });
  // create title car element
  const carTitle = document.createElement('p');
  carTitle.classList.add('car__title');
  const carTitleName = document.createElement('span');
  carTitleName.textContent = props.name;
  const carTitleNumber = document.createElement('span');
  carTitleNumber.textContent = `#${props.id}`;
  carTitle.append(carTitleName, carTitleNumber);
  carButtons.append(btnSelect, btnDelete, carTitle);
  // create road element
  const carRoad = document.createElement('div');
  carRoad.classList.add('car__road');
  // create buttons for motion control
  const roadButtons = document.createElement('div');
  roadButtons.classList.add('car__buttons');
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
  const roadCarIcon = carIconView(props.color);
  roadCarIcon.id = `car-${props.id}`;
  // create finish element
  const roadFinishIcon = document.createElement('div');
  roadFinishIcon.classList.add('car__road__finish');
  roadFinishIcon.textContent = 'FINISH';

  // add listeners
  btnSelect.addEventListener('click', (event) => onSelectCar(event, props));
  btnDelete.addEventListener('click', () => onDeleteCar(props));
  btnDrive.addEventListener('click', (event) =>
    onStartOneCar(event, props.id, roadCarIcon, roadFinishIcon, btnStop)
  );
  btnStop.addEventListener('click', (event) =>
    onStopOneCar(event, props.id, roadCarIcon, btnDrive)
  );

  carRoad.append(roadButtons, roadCarIcon, roadFinishIcon);

  car.append(carButtons, carRoad);

  return car;
};

export default carView;
