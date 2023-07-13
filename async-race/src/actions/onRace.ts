import { createWinner, updateWinner } from '../api/requests';
import carsState from '../state/carsState';
import htmlState from '../state/htmlState';
import winnersState from '../state/winnersState';
import updateDisplayWinner from './view-updaters/updateDisplayWinner';

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

  // get race winner:
  const { id, time } = await raceAll(promises, ids);
  updateDisplayWinner(id);
  const winner = winnersState.addWinner({ id, time: time / 1000 });
  console.log(winner);
  if (winner.wins > 1) {
    await updateWinner(winner);
  } else {
    await createWinner(winner);
  }
};

export default onRace;
