import { combineReducers } from 'redux';

import { reducer as reduxForm } from 'redux-form';
import userReducer from './userReducer';
import notesReducer from './notesReducer';

export default combineReducers({
  user: userReducer,
  notes: notesReducer,
  form: reduxForm
});
