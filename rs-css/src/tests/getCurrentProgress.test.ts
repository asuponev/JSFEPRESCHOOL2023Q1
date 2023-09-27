import getCurrentProgress from '../services/getCurrentProgress';

test('current progress cannot be undefined, if the local storage is empty function must return empty array []', () => {
  expect(getCurrentProgress()).toBeInstanceOf(Array);
});
