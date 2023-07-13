import carsState from '../state/carsState';
import htmlState from '../state/htmlState';

const onResetRace = async (event: MouseEvent) => {
  const btnReset = event.target as HTMLButtonElement;
  const btnRace = htmlState.getElementById('btn-race') as HTMLButtonElement;
  btnReset.disabled = true;

  const promises = carsState.items.map((item) => carsState.resets[item.id]());
  await Promise.all(promises);

  btnRace.disabled = false;
};

export default onResetRace;
