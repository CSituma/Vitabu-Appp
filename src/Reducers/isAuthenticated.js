import {
  GET_ERRORS,
  LOG_IN,
  LOGOUT,

  DELETE_USER
} from "../Actions/types"

const initialState = {
  token:localStorage.getItem('token'),
  isAuthenticated: !localStorage.getItem('token')? false :true ,
  loading:true,
  errors:'',
  user:localStorage.getItem('userss'),
 
 
};

const isAuthenticated = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case LOG_IN:
      return {
        ...state,
        isAuthenticated:true,
         user:payload
       
      };
    
    case DELETE_USER:
      return {
        ...state,
        token: null,
        isAuthenticated: false,
        loading: false,
        user: null,
        
      };
    case GET_ERRORS:
      return {
        ...state,
        token: null,
        isAuthenticated: false,
        loading: false,
        user: null,
        errors:payload
      };
    case LOGOUT:
      return {
        ...state,
        token: null,
        isAuthenticated: false,
        loading: false,
        user: null,

      };
    default:
      return state;
  }
}
export default isAuthenticated