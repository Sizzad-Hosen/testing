import { describe, it, expect, vi } from 'vitest';
import * as email from './email';
import { registerUser } from './userService';

it('should send email on registration', () => {
  const spy = vi.spyOn(email, 'sendEmail').mockImplementation(() => {});

  const result = registerUser('test@mail.com');

  expect(spy).toHaveBeenCalledWith('test@mail.com');
  expect(result).toBe(true);
});
