import {POST_ERROR,UPDATE_POST, GET_POSTS,DELETE_POST, UPDATE_LIKES} from "../Actions/types"



const bookrecords =  (posts=[], action) => {
  switch (action.type) {

  
   case GET_POSTS:
  return action.payload;

  case UPDATE_POST:

 return  posts.map((post) => 

  post._id === action.payload._id ? action.payload : post
 
  );
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
export default bookrecords
