import { getUserById } from './db';

test('testing user id', () => {
  expect(getUserById('1').userName).toBe('Gil Amran');
});
