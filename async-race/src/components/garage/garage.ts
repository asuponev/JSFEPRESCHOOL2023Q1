import { getAllCars } from '../../api/requests';
import { ICar } from '../../types/types';
import carView from '../car/car';
import basePaginationBtns from '../base/pagination/paginationBtns';
import basePaginationTitle from '../base/pagination/paginationTitle';
import baseSectionTitle from '../base/sectionTitle/sectionTitle';
import './garage.scss';
import baseForm from '../base/form/form';
import baseButton from '../base/button/button';

const garagePage = 1;
let cars: ICar[] | undefined;
let errorText: string;

try {
  cars = await getAllCars(garagePage);
} catch (error) {
  errorText = error as string;
}

const garageView = (): HTMLElement => {
  const garage = document.createElement('section');
  garage.classList.add('section', 'garage');

  if (cars) {
    // create controls (forms for create/update, buttons for race/reset and generate cars)
    const garageControls = document.createElement('div');
    garageControls.classList.add('garage__controls');
    const formCreate = baseForm({ id: 'create', disabled: false });
    const formUpdate = baseForm({ id: 'update', disabled: true });
    const garageControlsBtns = document.createElement('div');
    garageControlsBtns.classList.add('garage__buttons');
    const btnRace = baseButton({
      text: 'race',
      customClass: 'button--main',
      disabled: false,
    });
    const btnReset = baseButton({
      text: 'reset',
      customClass: 'button--main',
      disabled: true,
    });
    const btnGenerateCars = baseButton({
      text: 'generate cars',
      customClass: 'button--minor',
    });
    garageControlsBtns.append(btnRace, btnReset, btnGenerateCars);

    garageControls.append(formCreate, formUpdate, garageControlsBtns);

    // create content (title with count, pagination with cars)
    const garageContent = document.createElement('div');
    garageContent.classList.add('garage__content');

    const sectionTitle = baseSectionTitle({
      text: 'Garage',
      count: cars.length,
    });

    const paginationTitle = basePaginationTitle({
      text: 'Page',
      page: garagePage,
    });

    const garageItems = document.createElement('div');
    garageItems.classList.add('garage__items');
    garageItems.append(...cars.map((car) => carView(car)));

    const paginationBtns = basePaginationBtns();

    garageContent.append(
      sectionTitle,
      paginationTitle,
      garageItems,
      paginationBtns
    );

    garage.append(garageControls, garageContent);
  } else {
    garage.textContent = errorText;
  }

  return garage;
};

export default garageView;
