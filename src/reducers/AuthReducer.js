import { LOGIN_USER } from '../actions/types';

export default (state = false, action) => {
  switch(action.type) {
    case LOGIN_USER:
      return action.payload;
  }
  return state;
};
