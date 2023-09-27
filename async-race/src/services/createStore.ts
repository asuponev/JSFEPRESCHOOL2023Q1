export interface IStore<T, A> {
  getState: () => T;
  subscribe: (fn: (state: T) => void) => void;
  dispatch: (action: A) => void;
}

export default function createStore<T, A>(
  reducer: (state: T, action: A) => T,
  initialState: T
): IStore<T, A> {
  const subscribers: ((state: T) => void)[] = [];
  let currentState = initialState;

  return {
    getState() {
      return currentState;
    },
    subscribe(fn) {
      subscribers.push(fn);
      fn(currentState);
    },
    dispatch(action) {
      currentState = reducer(currentState, action);
      subscribers.forEach((fn) => fn(currentState));
    },
  };
}
