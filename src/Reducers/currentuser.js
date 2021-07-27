import {POST_ERROR,GET_USERS_POSTS,UPDATE_LIKES,DELETE_POST,SAVE_POST} from "../Actions/types"



const currentuser =  (posts=[], action) => {
  switch (action.type) {

    case SAVE_POST:
  return [...posts, action.payload];

   case GET_USERS_POSTS:
  return [...posts, isAuthenticated:true,action.payload];

  case DELETE_POST:

    return  posts.filter((post) => 
   
     post._id !== action.payload);
   
   
     case UPDATE_LIKES:
   
    return posts.map((post) => 
   
     post._id === action.payload._id ? action.payload : post
    
     );
  
  case POST_ERROR:
    return action.payload;

  default:
    return posts
  }
}
export default currentuser 
