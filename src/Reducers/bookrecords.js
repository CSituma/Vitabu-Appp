import {POST_ERROR,SAVE_POST,ACCOUNT_DELETED, CLEAR_PROFILE, UPDATE_POST, GET_POSTS,DELETE_POST, UPDATE_LIKES} from "../Actions/types"



const initialState =  {

  post:[],
  posts:[],
  errors:'',
  loading:false,

   

    }

const bookrecords =  (state = initialState, action) => {
  switch (action.type) {

  case SAVE_POST:
    return { ...state,
      post:action.payload,
   }

  
   case GET_POSTS:
    return { ...state,
      posts:action.payload,
   }

  case UPDATE_POST:

 return  state.posts.map((post) => 

  post._id === action.payload._id ? action.payload : post
 
  );
  case DELETE_POST:

 return  state.posts.filter((post) => 

  post._id !== action.payload);


  case UPDATE_LIKES:

 return  state.posts.map((post) => 

  post._id === action.payload._id ? action.payload : post
 
  );


  case ACCOUNT_DELETED:
    return { ...state,
       post:null   
      }
  case CLEAR_PROFILE:
    return { ...state,
       post:null 
    
      }
  case POST_ERROR:
    return [{ ...state,
       errors:action.payload,
       post:null
    }]

  default:
    return state
  }
}
export default bookrecords
