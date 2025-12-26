// src/calculateSum.js
import { toNumber } from './toNumber';
import { add } from './add';

export function calculateSum(a, b) {
  const num1 = toNumber(a);
  const num2 = toNumber(b);
  return add(num1, num2);
}
