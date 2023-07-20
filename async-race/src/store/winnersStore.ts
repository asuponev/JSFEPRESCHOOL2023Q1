import createStore, { IStore } from '../services/createStore';
import { IWinner } from '../types/types';

interface IWinnersState {
  items: IWinner[];
  count: number;
  page: number;
  sort: string;
  order: string;
  fetchError: string;
}

interface IWinnersAction {
  type: string;
  payload?: IWinner[];
  count?: number;
  error?: string;
  winnerId?: number;
  sort?: string;
  order?: string;
}

const initialState: IWinnersState = {
  items: [],
  count: 0,
  page: 1,
  sort: '',
  order: '',
  fetchError: '',
};

const reducer = (
  state: IWinnersState,
  action: IWinnersAction
): IWinnersState => {
  const newState: IWinnersState = JSON.parse(JSON.stringify(state));
  switch (action.type) {
    case 'FETCH':
      if (action.payload) newState.items = action.payload;
      if (action.count) newState.count = action.count;
      return newState;
    case 'FETCH_ERROR':
      if (action.error) newState.fetchError = action.error;
      return newState;
    case 'ADD_WINNER':
      if (action.payload && newState.items.length < 10) {
        newState.items.push(action.payload[0]);
      }
      newState.count += 1;
      return newState;
    case 'REMOVE_WINNER':
      // newState.items = newState.items.filter(
      //   (item) => item.id !== action.winnerId
      // );
      newState.items = [];
      newState.count -= 1;
      return newState;
    case 'UPDATE_WINNER':
      newState.items.forEach((item, index) => {
        if (item.id === action.payload?.[0].id) {
          const updatedItem = action.payload[0];
          newState.items[index] = updatedItem;
        }
      });
      return newState;
    case 'NEXT_PAGE':
      if (
        newState.count > 10 ||
        newState.page < Math.ceil(newState.count / 10)
      ) {
        newState.page += 1;
        newState.items = [];
      }
      return newState;
    case 'PREV_PAGE':
      if (newState.page > 1) {
        newState.page -= 1;
        newState.items = [];
      }
      return newState;
    case 'SORT_MODE':
      if (action.sort) newState.sort = action.sort;
      if (action.order) newState.order = action.order;
      newState.items = [];
      return newState;
    case 'OFF_SORT_MODE':
      newState.sort = '';
      newState.order = '';
      newState.items = [];
      return newState;
    default:
      return newState;
  }
};

const winnersStore: IStore<IWinnersState, IWinnersAction> = createStore(
  reducer,
  initialState
);

export default winnersStore;
