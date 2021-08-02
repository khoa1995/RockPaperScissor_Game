import { COUNT_DOWN, COUNT_UP } from "../actions/countAction";

const initState = {
  number: 8,
};
//return về object
const countReducer = (state = initState, action) => {
  //immutable
  switch (action.type) {
    case COUNT_UP:
      state.number = state.number + action.payload;
      return {...state};
    case COUNT_DOWN:
      state.number = state.number - 1;
      return {...state};
    default:
      //ngăn ngừa app bị crash
      return {...state};
  }
};

export default countReducer;
