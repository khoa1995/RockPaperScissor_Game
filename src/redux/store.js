import { createStore } from "redux";
import rootReducer from "./reducers/rootReducer";

//createStore chứa rootReducer=> chứa tất cả các reducer
const store = createStore(rootReducer);
export default store