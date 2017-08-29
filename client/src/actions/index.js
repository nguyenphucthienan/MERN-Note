import axios from 'axios';
import {
  FETCH_USER,
  FETCH_NOTES,
  FETCH_NOTE,
  RESET_NOTE
} from './types';

export const fetchUser = () => async (dispatch) => {
  const res = await axios.get('/api/me');

  dispatch({ type: FETCH_USER, payload: res.data });
};

export const fetchNotes = () => async (dispatch) => {
  const res = await axios.get('/api/notes');

  dispatch({ type: FETCH_NOTES, payload: res.data });
};

export const fetchNote = id => async (dispatch) => {
  const res = await axios.get(`/api/notes/${id}`);

  dispatch({ type: FETCH_NOTE, payload: res.data });
};

export const resetNote = () => async (dispatch) => {
  dispatch({ type: RESET_NOTE });
};
