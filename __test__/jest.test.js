import without from '../src/jest.js';

test('without', () => {
  expect(without([2, 1, 2, 3], 1, 2)).toEqual([3]);
});
