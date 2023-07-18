import navigateStore from '../store/navigateStore';

const onClickNavigate = (newPage: string): void => {
  navigateStore.dispatch({ type: 'SET_CURRENT_VIEW', payload: newPage });
};

export default onClickNavigate;
