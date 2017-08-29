import { combineReducers } from 'redux';

import { reducer as reduxForm } from 'redux-form';
import userReducer from './userReducer';
import notesReducer from './notesReducer';
import noteReducer from './noteReducer';

export default combineReducers({
  user: userReducer,
  notes: notesReducer,
  note: noteReducer,
  form: reduxForm
});
