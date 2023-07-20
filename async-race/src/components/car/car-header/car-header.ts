import onDeleteCar from '../../../actions/onDeleteCar';
import onSelectCar from '../../../actions/onSelectCar';
import baseButton from '../../base/button/button';
import carStore from '../../../store/carStore';
import { ICar } from '../../../types/types';

const carHeaderView = (car: ICar): HTMLDivElement => {
  const carHeader = document.createElement('div');
  carHeader.classList.add('car__header');

  // create buttons for edit and delete car
  const btnSelect = baseButton({
    text: 'select',
    customClass: 'button--minor',
    onClick: (event: MouseEvent) => onSelectCar(event, car),
  });
  btnSelect.dataset.carId = `${car.id}`;
  const btnDelete = baseButton({
    text: 'delete',
    customClass: 'button--minor',
    onClick: () => onDeleteCar(car),
  });

  // create title car element
  const carTitle = document.createElement('p');
  carTitle.classList.add('car__title');
  const carTitleName = document.createElement('span');
  carTitleName.textContent = car.name;
  const carTitleNumber = document.createElement('span');
  carTitleNumber.textContent = `#${car.id}`;
  carTitle.append(carTitleName, carTitleNumber);

  // subscription to state changes
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

  carHeader.append(btnSelect, btnDelete, carTitle);
  return carHeader;
};

export default carHeaderView;
