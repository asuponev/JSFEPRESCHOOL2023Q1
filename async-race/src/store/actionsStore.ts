interface IActionsStore {
  actions: Record<string, () => Promise<{ id: number; time: number | null }>>;
  resets: Record<string, () => Promise<void>>;
}

const actionsStore: IActionsStore = {
  actions: {},
  resets: {},
};

export default actionsStore;
