// userService.js
import { sendEmail } from './email';

export function registerUser(email) {
  sendEmail(email);
  return true;
}
