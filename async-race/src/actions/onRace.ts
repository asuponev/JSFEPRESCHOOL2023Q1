import actionsStore from '../store/actionsStore';
import carStore from '../store/carStore';
import onCreateWinner from './onCreateWinner';

const onRace = async (): Promise<void> => {
  try {
    carStore.dispatch({ type: 'ON_RACE_MODE' });
    carStore.dispatch({ type: 'BLOCK_PAGI_AND_NAV' });
    const { items } = carStore.getState();
    const { actions } = actionsStore;
    const promises = items.map((item) => actions[item.id]?.());

    const { id, time } = await Promise.any(promises);
    carStore.dispatch({ type: 'ADD_CURRENT_WINNER', winnerId: id });
    await onCreateWinner({ id, time: time / 1000 });
  } catch (error) {
    if (error instanceof AggregateError) {
      console.log('No winner, everyone in the race broke down');
    }
  }
};

export default onRace;
