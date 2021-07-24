import axios from 'axios';
import { LOGOUT } from '../Actions/types';
import store from '../store/store';

const api = axios.create({
  baseURL: 'https://vitabu2.herokuapp.com/api',
  headers: {
    'Content-Type' : 'application/json',
    'Accept' : 'application/json',
    'x-auth-token': localStorage.getItem("token")
  }
});

/////Check if token expired////////

api.interceptors.response.use(
  res => res,
  err => {
    if (err.response.status === 401) {
      store.dispatch({ type: LOGOUT });
    }
    return Promise.reject(err);
  }
);
export default api;
