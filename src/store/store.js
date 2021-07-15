
import {createStore, applyMiddleware,compose} from "redux"
import allReducers from "../Reducers/index"
import thunk from "redux-thunk"

const middleware =[thunk];
const store = createStore(
  allReducers,
  compose(applyMiddleware(...middleware),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  ));



export default store;
  
