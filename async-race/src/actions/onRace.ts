import carsState from '../state/carsState';
import htmlState from '../state/htmlState';

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

const onRace = async (event: MouseEvent) => {
  const btnRace = event.target as HTMLButtonElement;
  const btnReset = htmlState.getElementById('btn-reset') as HTMLButtonElement;
  btnRace.disabled = true;
  if (btnReset) btnReset.disabled = false;

  const promises = carsState.items.map((item) =>
    carsState.actions[item.id]?.()
  );
  const ids = carsState.items.map((item) => item.id);

  const winner = await raceAll(promises, ids);
  console.log(winner);
};

export default onRace;
