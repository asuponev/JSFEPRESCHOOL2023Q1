const state = {
  engine: {
    starts: [] as number[],
    addStartedEngine: (carId: number): void => {
      state.engine.starts.push(carId);
    },
    removeStoppedEngine: (carId: number): void => {
      state.engine.starts = state.engine.starts.filter((id) => id !== carId);
    },
    isEngineStarts: (id: number): boolean => state.engine.starts.includes(id),
  },
  driveCar: {
    animations: [] as Animation[],
    addAnimation: (animation: Animation): void => {
      state.driveCar.animations.push(animation);
    },
    stopAnimation: (animationId: string): void => {
      state.driveCar.animations.forEach((animation) => {
        if (animation.id === animationId) {
          animation.cancel();
        }
      });
    },
    removeAnimation: (animationId: string): void => {
      state.driveCar.animations = state.driveCar.animations.filter(
        (animation) => animation.id !== animationId
      );
    },
  },
};

export default state;
