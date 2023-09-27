import InputControls from '../app/input-controls';

describe('levelsControls', () => {
  const inputControls = new InputControls();

  test('defines checkAnswer()', () => {
    const event = new Event('event');
    const result = inputControls['checkAnswer'](event);

    expect(typeof inputControls['checkAnswer']).toBe('function');
    expect(result).toBeUndefined();
  });

  test('defines printAnswer()', () => {
    const result = inputControls['printAnswer']();

    expect(typeof inputControls['printAnswer']).toBe('function');
    expect(result).toBeUndefined();
  });
});
