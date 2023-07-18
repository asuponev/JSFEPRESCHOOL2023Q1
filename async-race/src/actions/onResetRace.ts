import actionsStore from '../store/actionsStore';
import carStore from '../store/carStore';

const onResetRace = async (event: MouseEvent): Promise<void> => {
  const { items } = carStore.getState();
  const { resets } = actionsStore;

  const btnReset = event.target as HTMLButtonElement;
  btnReset.disabled = true;

  const promises = items.map((item) => resets[item.id]?.());
  await Promise.all(promises);

  carStore.dispatch({ type: 'OFF_RACE_MODE' });
  carStore.dispatch({ type: 'REMOVE_CURRENT_WINNER' });
};

export default onResetRace;
