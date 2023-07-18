import onCreateCar from '../../../actions/onCreateCar';
import onGenerateCars from '../../../actions/onGenerateCars';
import onRace from '../../../actions/onRace';
import onResetRace from '../../../actions/onResetRace';
import onUpdateCar from '../../../actions/onUpdateCar';
import carStore from '../../../store/carStore';
import baseButton from '../../base/button/button';
import baseForm from '../../base/form/form';

const garageControlsView = (): HTMLDivElement => {
  const garageControls = document.createElement('div');
  garageControls.classList.add('garage__controls');
  // create forms for create/update car
  const formCreate = baseForm({
    id: 'create',
    onSubmit: onCreateCar,
    disabled: false,
  });
  const formUpdate = baseForm({
    id: 'update',
    onSubmit: onUpdateCar,
    disabled: true,
  });
  // create buttons for race/reset and generate cars
  const garageControlsBtns = document.createElement('div');
  garageControlsBtns.classList.add('garage__buttons');
  const btnRace = baseButton({
    text: 'race',
    customClass: 'button--main',
    disabled: false,
    onClick: onRace,
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

  btnReset.addEventListener('click', (event) => onResetRace(event));
  btnGenerateCars.addEventListener('click', (event) => onGenerateCars(event));

  garageControlsBtns.append(btnRace, btnReset, btnGenerateCars);

  garageControls.append(formCreate, formUpdate, garageControlsBtns);

  // race mode change subscription
  carStore.subscribe((state) => {
    btnRace.disabled = state.isRace;
    btnReset.disabled = !state.isRace;
  });

  return garageControls;
};

export default garageControlsView;
