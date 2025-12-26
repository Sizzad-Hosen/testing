import { describe, it, expect } from 'vitest';
import { calculateSum } from './number';

describe('Integration Test: calculateSum', () => {
  it('should convert strings to numbers and add them', () => {
    const result = calculateSum("10", "20");
    expect(result).toBe(30);
  });

  it('should work with mixed types', () => {
    const result = calculateSum("5", 15);
    expect(result).toBe(20);
  });
});


