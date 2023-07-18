import { ICar } from '../../../types/types';
import onDeleteCar from '../../../actions/onDeleteCar';
import onSelectCar from '../../../actions/onSelectCar';
import baseButton from '../../base/button/button';
import carStore from '../../../store/carStore';

const carHeaderView = (car: ICar): HTMLDivElement => {
  const carHeader = document.createElement('div');
  carHeader.classList.add('car__header');
  // create buttons for edit and delete car
  const btnSelect = baseButton({
    text: 'select',
    customClass: 'button--minor',
  });
  btnSelect.dataset.carId = `${car.id}`;
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

  carStore.subscribe((state) => {
    const foundCar = state.items.find((item) => item.id === car.id);
    if (foundCar && foundCar.id === car.id && foundCar.name !== car.name) {
      carTitleName.textContent = foundCar.name;
    }

    if (state.selectedCar?.id === car.id) {
      btnSelect.classList.add('button--selected');
    } else {
      btnSelect.classList.remove('button--selected');
    }
  });

  return carHeader;
};

export default carHeaderView;
