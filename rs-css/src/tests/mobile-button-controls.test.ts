import MobileButtonControls from '../app/mobile-button-controls';

describe('MobileButtonControls', () => {
  const mobileButtonControls = new MobileButtonControls();

  beforeEach(() => {
    document.body.innerHTML = `
      <div class="sidebar"></div>
      <button id="btn-open-levels"></button>
      <button id="btn-close-levels"></button>
    `;

    mobileButtonControls['sidebar'] = document.querySelector('.sidebar');
    mobileButtonControls['btnOpenLevels'] =
      document.querySelector('#btn-open-levels');
    mobileButtonControls['btnCloseLevels'] =
      document.querySelector('#btn-close-levels');
  });

  afterEach(() => {
    document.body.innerHTML = '';
  });

  describe('onOpen', () => {
    test('should add "open" class to the sidebar', () => {
      mobileButtonControls['onOpen']();
      expect(
        mobileButtonControls['sidebar']?.classList.contains('open')
      ).toBeTruthy();
    });
  });

  describe('onOpen', () => {
    test('should add "open" class to the sidebar', () => {
      mobileButtonControls['onClose']();
      expect(
        mobileButtonControls['sidebar']?.classList.contains('open')
      ).toBeFalsy();
    });
  });
});
