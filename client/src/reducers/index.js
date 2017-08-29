import { combineReducers } from 'redux';

import userReducer from './userReducer';
import notesReducer from './notesReducer';

export default combineReducers({
  user: userReducer,
  notes: notesReducer
});
