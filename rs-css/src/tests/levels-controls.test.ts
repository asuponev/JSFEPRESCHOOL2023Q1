import LevelsControls from '../app/levels-controls';

describe('levelsControls', () => {
  const levelsControls = new LevelsControls();

  test('defines init()', () => {
    expect(typeof levelsControls.init).toBe('function');
  });

  test('defines setLevel()', () => {
    expect(typeof levelsControls.setLevel).toBe('function');
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
