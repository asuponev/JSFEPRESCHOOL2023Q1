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

  const formCreate = baseForm({
    id: 'create',
    onSubmit: onCreateCar,
  });
  const formUpdate = baseForm({
    id: 'update',
    onSubmit: onUpdateCar,
  });

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
    onClick: (event: MouseEvent) => onResetRace(event),
  });
  const btnGenerateCars = baseButton({
    text: 'generate cars',
    customClass: 'button--minor',
    onClick: (event: MouseEvent) => onGenerateCars(event),
  });
  garageControlsBtns.append(btnRace, btnReset, btnGenerateCars);

  carStore.subscribe((state) => {
    btnRace.disabled = state.isRace;
    btnReset.disabled = !state.isRace;
  });

  garageControls.append(formCreate, formUpdate, garageControlsBtns);
  return garageControls;
};

export default garageControlsView;
