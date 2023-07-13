import carsState from '../../state/carsState';
import htmlState from '../../state/htmlState';

const updateDisplayWinner = (id?: number) => {
  let winnerMessage: HTMLElement | undefined;
  if (id) {
    carsState.currentRaceWinner = id;
    winnerMessage = htmlState.getElementById(`winner-car-${id}`);
    winnerMessage?.classList.add('display');
  } else {
    const oldWinner = carsState.currentRaceWinner;
    winnerMessage = htmlState.getElementById(`winner-car-${oldWinner}`);
    winnerMessage?.classList.remove('display');
    carsState.currentRaceWinner = null;
  }
};

export default updateDisplayWinner;
