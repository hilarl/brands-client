import { CALENDAR_EVENTS } from '../actions/types';

export default (state = [], action) => {
  switch(action.type) {
    case CALENDAR_EVENTS:
      return [action.payload, ...state];
  }
  return state;
};
