import {combineReducers} from "redux"
import isAuthenticated from "./isAuthenticated"
import bookrecords from "./bookrecords"
import currentuser from "./currentuser"

const allReducers = combineReducers ({

 auth:isAuthenticated,
 records: bookrecords,
currentuser:currentuser,
})

export default allReducers;