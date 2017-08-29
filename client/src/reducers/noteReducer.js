import { FETCH_NOTE, RESET_NOTE } from '../actions/types';

export default function (state = null, action) {
  switch (action.type) {
    case FETCH_NOTE:
      return action.payload;
    case RESET_NOTE:
      return null;
    default:
      return state;
  }
}
