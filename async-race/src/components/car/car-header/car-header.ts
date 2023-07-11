import { ICar } from '../../../types/types';
import onDeleteCar from '../../../actions/onDeleteCar';
import onSelectCar from '../../../actions/onSelectCar';
import baseButton from '../../base/button/button';

const carHeaderView = (car: ICar): HTMLDivElement => {
  const carHeader = document.createElement('div');
  carHeader.classList.add('car__header');
  // create buttons for edit and delete car
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
  carTitleName.textContent = car.name;
  const carTitleNumber = document.createElement('span');
  carTitleNumber.textContent = `#${car.id}`;
  carTitle.append(carTitleName, carTitleNumber);

  carHeader.append(btnSelect, btnDelete, carTitle);

  // add listeners
  btnSelect.addEventListener('click', (event) => onSelectCar(event, car));
  btnDelete.addEventListener('click', () => onDeleteCar(car));

  return carHeader;
};

export default carHeaderView;
