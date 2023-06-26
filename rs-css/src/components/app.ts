import { GAME_TABLE, GAME_TITLE, HTML_VIEWER, LEVELS_LIST } from './elements';
import LevelsControls from './levels-controls';

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
};
