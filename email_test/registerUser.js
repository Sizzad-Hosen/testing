// src/registerUser.js
import { validateEmail } from './validateEmail';

export function registerUser(email) {
  if (!validateEmail(email)) {
    throw new Error('Invalid email');
  }

  return {
    id: 1,
    email,
    status: 'registered',
  };
}
