import { combineReducers } from "redux";
import countReducer from "./countReducer";
import userReducer from "./userReducer";
import gameReducer from './gameReducer'

//redux nested
const rootReducer = combineReducers({
    countReducer : countReducer,
    userReducer : userReducer,
    gameReducer
})

export default rootReducer