import {GET_ERRORS, LOG_IN,LOGOUT,CLEAR_PROFILE} from "./types"
import axios from "axios"
import jwt_decode from "jwt-decode"


const LoginUser = (email,password) => dispatch => {
  const payload = {

    email,
    password
   
  }
  axios.post('https://vitabu2.herokuapp.com/api/login/loginuser',payload)
    .then( res => {
      console.log(res.data)
      const {token} = res.data;
      
///////////////////////////////////////
      /*checking for token,
      saving and deleting it on localstorage*/
///////////////////////////////////////////
      const setAuthToken = token => {
        if (token) {
          //apply to every request
          axios.defaults.headers.common['x-auth-token'] = token;
          localStorage.setItem('token', token);
        } else {
          delete axios.defaults.headers.common['x-auth-token'];
          localStorage.removeItem('token');
        }
      };
      /////////////////////////////////////////////////////
      setAuthToken(token);
      ///Decode Token to get user data

      const decoded = jwt_decode(token);


////saving user in local storage//////////////

       const user = JSON.stringify(decoded)

       const saveUser = users => {
        if (users) {
 
          localStorage.setItem('userss', users);
        } else {
          localStorage.removeItem('userss');
        }
      };
      /////////////////////////////////////////////////////
      saveUser(user);


       dispatch({
        type:  LOG_IN,
        payload:user
      
      })
    

    })
    .catch(error => {
        console.log(error)
        dispatch({
          type:GET_ERRORS,
          payload:error.response.data
 
       })

      })
  

}

////Set LOG IN//
/*export const setCurrentUser = (decoded) =>{
return{
 type:LOG_IN,
 payload:decoded

}

}*/
//////LOGOUT

export const logout = () =>dispatch =>{
  
    localStorage.removeItem('token');
    localStorage.removeItem('userss');
   
       dispatch({
       type: LOGOUT
      })
   
       dispatch({
       type:CLEAR_PROFILE
      })
    }


export default LoginUser
