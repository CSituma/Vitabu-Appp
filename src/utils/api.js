import axios from 'axios';


const api = axios.create({
  baseURL: 'https://vitabu2.herokuapp.com/api',
  headers: {
    "X-auth-token": localStorage.getItem("token")
  }
});


export default api;
