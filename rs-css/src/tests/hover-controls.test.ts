import HoverControls from '../app/hover-controls';

describe('hoverControls', () => {
  const hoverControls = new HoverControls();

  test('defines addTooltip()', () => {
    const result = hoverControls['addTooltip']();

    expect(typeof hoverControls['addTooltip']).toBe('function');
    expect(result).toBeUndefined();
  });

  test('defines hoverElement()', () => {
    const result = hoverControls['hoverElement']();

    expect(typeof hoverControls['hoverElement']).toBe('function');
    expect(result).toBeUndefined();
  });

  test('defines hoverLine()', () => {
    const result = hoverControls['hoverLine']();

    expect(typeof hoverControls['hoverLine']).toBe('function');
    expect(result).toBeUndefined();
  });
});
