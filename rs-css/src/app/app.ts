import InputControls from './input-controls';
import LevelsControls from './levels-controls';
import MobileButtonControls from './mobile-button-controls';

export const startApp = () => {
  new LevelsControls().init();
  new InputControls();
  new MobileButtonControls();
};
