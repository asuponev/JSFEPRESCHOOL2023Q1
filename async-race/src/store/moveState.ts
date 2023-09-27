interface IMoveState {
  startedEngine: number[];
  animations: Animation[];
  addStartedEngine: (carId: number) => void;
  removeStoppedEngine: (carId: number) => void;
  isEngineStarts: (carId: number) => boolean;
  addAnimation: (animation: Animation) => void;
  stopAnimation: (animationId: string) => void;
  removeAnimation: (animationId: string) => void;
  resetAllAnimation: () => void;
}

const moveState: IMoveState = {
  startedEngine: [],
  animations: [],
  addStartedEngine: (carId: number): void => {
    moveState.startedEngine.push(carId);
  },
  removeStoppedEngine: (carId: number): void => {
    moveState.startedEngine = moveState.startedEngine.filter(
      (id) => id !== carId
    );
  },
  isEngineStarts: (id: number): boolean => moveState.startedEngine.includes(id),
  addAnimation: (animation: Animation): void => {
    moveState.animations.push(animation);
  },
  stopAnimation: (animationId: string): void => {
    moveState.animations.forEach((animation) => {
      if (animation.id === animationId) {
        animation.cancel();
      }
    });
  },
  removeAnimation: (animationId: string): void => {
    moveState.animations = moveState.animations.filter(
      (animation) => animation.id !== animationId
    );
  },
  resetAllAnimation: (): void => {
    moveState.animations.forEach((animation) => animation.cancel());
    moveState.animations = [];
    moveState.startedEngine = [];
  },
};

export default moveState;
