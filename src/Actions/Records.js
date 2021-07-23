import {PROFILE_ERRORS, SAVE_POST, CLEAR_PROFILE, UPDATE_POST,POST_ERROR,UPDATE_LIKES,DELETE_POST, GET_POSTS,GET_USERS_POSTS, DELETE_USER} from "./types" 
import { setAlert } from './alert';
import api from '../utils/api';



export const addBooks = (data) =>  dispatch => {

  //adding Books 

    api.post('/records', data)
   .then(res => {
     console.log(res.data)


      dispatch({
         type:SAVE_POST,
         payload:res.data

      })})
      .catch(error => {
        console.log(error)
        dispatch({
          type:POST_ERROR,
          payload:error.response.data
 
       })

      })
   }

   //Fetching All  Books

   export const getBooks = () => dispatch => {
    api.get('/records/')
    .then(res => {
      console.log(res.data)
     
      dispatch({
      type:GET_POSTS,
      payload:res.data
      })})
    .catch(error => {  
      console.log(error)
      dispatch({
       type:POST_ERROR,
     payload:error.response.data
         })
   
     }) };



   //Fetching Books By User

   export const getBooksByUser = () => dispatch => {
    api.get('/records/mypost')
    .then(res => {
      console.log(res.data)
     
      dispatch({
      type:GET_USERS_POSTS,
      payload:res.data
      })})
    .catch(error => {  
      console.log(error)
      dispatch({
       type:POST_ERROR,
     payload:error.response.data
         })
   
     }) };


    //update post
   export const updateBooks = (id, data) =>dispatch =>{

   api.patch(`/records/${id}`, data)
 .then(res => {
   console.log(res.data)
   
   dispatch({

   type:UPDATE_POST,
   payload: res.data
   })})
   .catch(error => {
    console.log(error)
    dispatch({
      type:POST_ERROR,
      payload:error.res.data

   })})
   } 
   
//   // Search Book 
// export const searchBook = searchQuery=> async dispatch => {
//   try {
//     const res = await api.get(`/records/search?searchQuery=${searchQuery.search} || 'none`,searchQuery);

//     dispatch({
//       type: SEARCH_POSTS,
//       payload: res.data
//     });
//   } catch (err) {
//     dispatch({
//       type: POST_ERROR,
//       payload: { msg: err.response.statusText, status: err.response.status }
//     });
//   }
// };


// Delete Book
export const deleteBook = id => async dispatch => {
  try {
    await api.delete(`/records/${id}`);

    dispatch({
      type: DELETE_POST,
      payload: id
    });

    dispatch(setAlert('Post Removed', 'success'));
  } catch (err) {
    dispatch({
      type: POST_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};





// Add/Update Likes
export const addLike = id => async dispatch => {
  try {
    const res = await api.patch(`/records/${id}/like`);

    dispatch({
      type: UPDATE_LIKES,
      payload:res.data 
    });
  } catch (err) {
    dispatch({
      type: POST_ERROR,
      payload: { msg: err.response}
    });
  }
};

// Remove like
export const removeLike = id => async dispatch => {
  try {
    const res = await api.put(`/records/unlike/${id}`);

    dispatch({
      type: UPDATE_LIKES,
      payload: { id, like: res.data }
    });
  } catch (err) {
    dispatch({
      type: POST_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};









export const clearBooks = () =>{

return({

  type:CLEAR_PROFILE
})


}

///Deleete Account
export const deleteUser = () => dispatch =>{
if(window.confirm ('Are you sure?This Cannot be undone!')){

  api.delete('/login/delete')
  .then(res => {
    console.log(res.data)
     dispatch({
        type: DELETE_USER,
        payload:{}

     })})
     .catch(error => {
       console.log(error)
       dispatch({
         type:PROFILE_ERRORS,
         payload:error.response.data

      })

     })
  }
}


