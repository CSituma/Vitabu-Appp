import { CURRENT_USER} from "../Actions/types"

const initialState = {

  user:{}
}

const currentuser = (state = initialState, action) => {
  switch (action.type) {

  case CURRENT_USER:
    return { ...state, 
     user:action.payload,
    }

  default:
    return state
  }
}
export default currentuser