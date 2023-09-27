import getCurrentLevel from '../services/getCurrentLevel';

test('current level cannot be undefined, if the local storage is empty function must return 1', () => {
  expect(typeof getCurrentLevel()).toBe('number');
});
