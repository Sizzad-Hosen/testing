// transformToNumber.test.js
import { describe, it, expect } from 'vitest';
import { transformToNumber } from './transformToNumber';

describe('transformToNumber', () => {

  it('should convert string number to number', () => {
    expect(transformToNumber('10')).toBe(10);
  });

  it('should convert number string with decimals', () => {
    expect(transformToNumber('5.5')).toBe(5.5);
  });

  it('should return NaN for invalid string', () => {
    expect(transformToNumber('abc')).toBeNaN();
  });

  it('should return 0 for empty string', () => {
    expect(transformToNumber('')).toBe(0);
  });

  it('should return number if number is passed', () => {
    expect(transformToNumber(20)).toBe(20);
  });

});
