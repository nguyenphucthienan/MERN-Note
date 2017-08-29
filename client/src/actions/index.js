import axios from 'axios';
import { FETCH_USER, FETCH_NOTES } from './types';

export const fetchUser = () => async (dispatch) => {
  const res = await axios.get('/api/me');

  dispatch({ type: FETCH_USER, payload: res.data });
};

export const fetchNotes = () => async (dispatch) => {
  const res = await axios.get('/api/notes');

  dispatch({ type: FETCH_NOTES, payload: res.data });
};
