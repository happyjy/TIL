import { add, Integer } from './calculator';

test('add', () => {
  // 1. What --> How to use (UX)
  // 2. Why --> result (expected)

  expect(add(1, 2)).toBe(3);
  expect(add(10, 20)).toBe(30);
  expect(add(3, -2)).toBe(1);
  expect(add(3, null)).toBe(3);
  expect(add(null, 3)).toBe(3);
  expect(add(undefined, 3)).toBe(3);
  expect(add(3, undefined)).toBe(3);
  expect(add(3, 4, 5)).toBe(12);
});

test('Integer.plus', () => {
  const one = new Integer(1);
  const two = new Integer(2);
  const three = new Integer(3);
  const five = new Integer(5);

  expect(one.plus(two)).toEqual(three);
  expect(two.plus(three)).toEqual(five);
});
