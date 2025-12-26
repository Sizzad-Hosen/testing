import { registerUser } from "./registerUser";
import { describe, it, expect } from 'vitest';
describe('Integration Test: Email Validation + Registration', () => {

  it('should register user with valid email', () => {
    const user = registerUser('test@example.com');

    expect(user.email).toBe('test@example.com');
    expect(user.status).toBe('registered');
  });

  it('should throw error for invalid email', () => {
    expect(() => {
      registerUser('invalid-email');
    }).toThrow('Invalid email');
  });

});
