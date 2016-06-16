import { LOGIN_USER } from './types';

export function authenticate(isLoggedIn) {
  return {
    type: LOGIN_USER,
    payload: isLoggedIn
  }
}
