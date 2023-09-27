import createStore, { IStore } from '../services/createStore';

interface INavState {
  currentView: string;
}

interface INavAction {
  type: string;
  payload: string;
}

const initialState: INavState = {
  currentView: 'garage',
};

const reducer = (state: INavState, action: INavAction): INavState => {
  const newState: INavState = JSON.parse(JSON.stringify(state));
  switch (action.type) {
    case 'SET_CURRENT_VIEW':
      newState.currentView = action.payload;
      return newState;
    default:
      return newState;
  }
};

const navigateStore: IStore<INavState, INavAction> = createStore(
  reducer,
  initialState
);

export default navigateStore;
