import { combineReducers } from 'redux';
import AuthReducer from './AuthReducer';
import CalendarReducer from './CalendarReducer';

const rootReducer = combineReducers({
  authenticate: AuthReducer,
  events: CalendarReducer
});

export default rootReducer;
