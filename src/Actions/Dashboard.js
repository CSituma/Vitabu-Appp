import api from '../utils/api';


import {
 CURRENT_USER,
  GET_USERS,
  GET_PROFILE,
  PROFILE_ERRORS,
  CURRENT_RECORDS
} from './types';





export const getBooksByUser = () => async (dispatch) => {
  try {
    const res = await api.get('/records/home');

    dispatch({
      type: CURRENT_RECORDS,
      payload: res.data
    });
  } catch (err) {
    dispatch({
      type: PROFILE_ERRORS,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};



// Get current users Dashboard // GETCURRENT USER/
// Get Each Reord populated by current yUsernameby Token 
export const getCurrentUser = () => async (dispatch) => {
  try {
    const res = await api.get('/login');

    dispatch({
      type: CURRENT_USER,
      payload: res.data
    });
  } catch (err) {
    dispatch({
      type: PROFILE_ERRORS,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};




// Get USERS
export const getUsers = () => async (dispatch) => {

  try {
    const res = await api.get('/login/users');

    dispatch({
      type: GET_USERS,
      payload: res.data
    });
  } catch (err) {
    dispatch({
      type: PROFILE_ERRORS,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};

// Get dAS HBOARD by ID
export const getDashBoardById = (userId) => async (dispatch) => {
  try {
    const res = await api.get(`/login/user/${userId}`);

    dispatch({
      type: GET_PROFILE,
      payload: res.data
    });
  } catch (err) {
    dispatch({
      type: PROFILE_ERRORS,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};