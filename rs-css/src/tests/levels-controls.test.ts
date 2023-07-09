import LevelsControls from '../app/levels-controls';

describe('levelsControls', () => {
  const levelsControls = new LevelsControls();

  describe('init()', () => {
    test('defines init()', () => {
      expect(typeof levelsControls.init).toBe('function');
    });
  });

  describe('setLevel()', () => {
    test('defines setLevel()', () => {
      expect(typeof levelsControls.setLevel).toBe('function');
    });

    test('method setLevel() can be called', () => {
      const arg = 13;
      const spy = jest.spyOn(levelsControls, 'setLevel');

      levelsControls.setLevel(arg);

      expect(spy).toHaveBeenCalledWith(arg);
    });
  });

  describe('saveCurrentLevel', () => {
    test('should save the current level to local storage', () => {
      const localStorageMock = {
        setItem: jest.fn(),
      };

      Object.defineProperty(window, 'localStorage', {
        value: localStorageMock,
      });

      levelsControls['saveCurrentLevel'](2);

      expect(localStorageMock.setItem).toHaveBeenCalledWith(
        'cur_lvl_rs_css',
        '2'
      );
    });
  });
});
