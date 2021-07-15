// import axios from "axios"
// import {GET_POSTS,  PROFILE_ERRORS } from "./types"
// import api from '../utils/api';

// ///To local storage 

//  const  fetchbooks =()=> dispatch =>{
 

//  api.get('/records')
//  .then(res => {
//    console.log(res.data)
  
   
//   //  const posts = JSON.stringify(res.data)

//    const savePosts = posts => {
//     if (posts) {

//       localStorage.setItem('postss', posts);
//     } else {
//       localStorage.removeItem('postss');
//     }
//   };
//   /////////////////////////////////////////////////////
//   savePosts(posts);
//    dispatch({

//    type:GET_POSTS,
//    payload:posts
//    })
  

//  })
//  .catch(error =>
//   {  dispatch({
//      type:PROFILE_ERRORS,
//       payload:error.data
//       })

//   })
// }

// export default fetchbooks