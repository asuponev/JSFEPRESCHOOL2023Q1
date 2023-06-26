import {
  BTN_CLOSE,
  BTN_OPEN,
  GAME_TABLE,
  GAME_TITLE,
  HTML_VIEWER,
  LEVELS_LIST,
  SIDEBAR,
} from './elements';
import LevelsControls from './levels-controls';
import MobileButtonControls from './mobile-button-controls';

const currentLevel: string = localStorage.getItem('cur_lvl_supo')
  ? (localStorage.getItem('cur_lvl_supo') as string)
  : '1';

export const startApp = () => {
  if (LEVELS_LIST && GAME_TITLE && GAME_TABLE && HTML_VIEWER) {
    new LevelsControls(
      currentLevel,
      LEVELS_LIST,
      GAME_TITLE,
      GAME_TABLE,
      HTML_VIEWER
    );
  }

  if (SIDEBAR && BTN_OPEN && BTN_CLOSE) {
    new MobileButtonControls(SIDEBAR, BTN_OPEN, BTN_CLOSE);
  }
};
