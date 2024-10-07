import gt from '../src/matcher.js';

test('matcher', () => {
  expect(gt(3, 1)).toBeTruthy();
  expect(gt(3, 3)).toBeFalsy();
  expect(gt(2, 3)).toBeFalsy();
  expect(gt()).toBeFalsy();
});
