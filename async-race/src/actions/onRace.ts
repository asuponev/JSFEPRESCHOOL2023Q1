import actionsStore from '../store/actionsStore';
import carStore from '../store/carStore';
import onCreateWinner from './onCreateWinner';

const raceAll = async (
  promises: Promise<{ id: number; time: number | null }>[],
  ids: number[]
): Promise<{ id: number; time: number }> => {
  const { id, time } = await Promise.race(promises);

  if (time === null) {
    const brokenIndex = ids.findIndex((i) => i === id);
    const newPromises = promises.filter((_, index) => index !== brokenIndex);
    const newIds = ids.filter((_, index) => index !== brokenIndex);
    return raceAll(newPromises, newIds);
  }

  return { id, time };
};

const onRace = async () => {
  carStore.dispatch({ type: 'ON_RACE_MODE' });
  const { items } = carStore.getState();
  const { actions } = actionsStore;

  const promises = items.map((item) => actions[item.id]?.());
  const ids = items.map((item) => item.id);

  // get race winner:
  const { id, time } = await raceAll(promises, ids);
  carStore.dispatch({ type: 'ADD_CURRENT_WINNER', winnerId: id });
  await onCreateWinner({ id, time: time / 1000 });
};

export default onRace;
