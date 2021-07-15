import { v4 as uuidv4 } from 'uuid';
import { SET_ALERT,REMOVE_ALERTS } from './types';

export const setAlert = (msg, alertType, timeout = 5000) => dispatch => {
  const id = uuidv4();
  dispatch({
    type: SET_ALERT,
    payload: { msg, alertType, id }
  });

  setTimeout(() => dispatch({ type: REMOVE_ALERTS, payload: id }), timeout);
};
