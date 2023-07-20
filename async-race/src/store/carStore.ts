import createStore, { IStore } from '../services/createStore';
import { ICar } from '../types/types';

interface ICarState {
  items: ICar[];
  selectedCar: ICar | null;
  isUpdate: boolean;
  isRace: boolean;
  isWalkBlocking: boolean;
  count: number;
  page: number;
  currentRaceWinner: number | null;
  fetchError: string;
}

interface ICarAction {
  type: string;
  payload?: ICar[];
  count?: number;
  error?: string;
  winnerId?: number;
}

const initialState: ICarState = {
  items: [],
  selectedCar: null,
  isUpdate: false,
  isRace: false,
  isWalkBlocking: false,
  count: 0,
  page: 1,
  currentRaceWinner: null,
  fetchError: '',
};

const reducer = (state: ICarState, action: ICarAction): ICarState => {
  const newState: ICarState = JSON.parse(JSON.stringify(state));
  switch (action.type) {
    case 'FETCH':
      if (action.payload) newState.items = action.payload;
      if (action.count) newState.count = action.count;
      return newState;
    case 'FETCH_ERROR':
      if (action.error) newState.fetchError = action.error;
      return newState;
    case 'ADD_ITEMS':
      if (action.payload) {
        action.payload.forEach((car) => {
          if (newState.items.length < 7) {
            newState.items.push(car);
          }
        });
        newState.count += action.payload.length;
      }
      return newState;
    case 'REMOVE_ITEM':
      newState.items = newState.items.filter(
        (item) => item.id !== action.payload?.[0].id
      );
      newState.count -= 1;
      return newState;
    case 'SELECT_CAR':
      newState.isUpdate = true;
      if (action.payload) {
        const selectedCarId = action.payload?.[0].id;
        const foundCar = state.items.find((item) => item.id === selectedCarId);
        if (foundCar) newState.selectedCar = foundCar;
      }
      return newState;
    case 'RESET_UPDATE_CAR':
      newState.isUpdate = false;
      newState.selectedCar = null;
      return newState;
    case 'UPDATE_ITEM':
      newState.items.forEach((item, index) => {
        if (item.id === action.payload?.[0].id) {
          const updatedItem = action.payload[0];
          newState.items[index] = updatedItem;
        }
      });
      newState.isUpdate = false;
      newState.selectedCar = null;
      return newState;
    case 'NEXT_PAGE':
      if (newState.count > 7 || newState.page < Math.ceil(newState.count / 7)) {
        newState.page += 1;
      }
      newState.isRace = false;
      newState.currentRaceWinner = null;
      return newState;
    case 'PREV_PAGE':
      if (newState.page > 1) {
        newState.page -= 1;
      }
      newState.isRace = false;
      newState.currentRaceWinner = null;
      return newState;
    case 'ON_RACE_MODE':
      newState.isRace = true;
      return newState;
    case 'BLOCK_PAGI_AND_NAV':
      newState.isWalkBlocking = true;
      return newState;
    case 'OFF_RACE_MODE':
      newState.isRace = false;
      newState.isWalkBlocking = false;
      return newState;
    case 'ADD_CURRENT_WINNER':
      if (action.winnerId) newState.currentRaceWinner = action.winnerId;
      newState.isWalkBlocking = false;
      return newState;
    case 'REMOVE_CURRENT_WINNER':
      newState.currentRaceWinner = null;
      return newState;
    default:
      return newState;
  }
};

const carStore: IStore<ICarState, ICarAction> = createStore(
  reducer,
  initialState
);

export default carStore;
