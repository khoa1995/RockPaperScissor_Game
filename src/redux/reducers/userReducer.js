import { USER_COUNT_UP } from "../actions/userAction";

const initState = {
  userName: 'React Native 2',
};

const userReducer = (state = initState, action) => {
  switch (action.type) {
    case USER_COUNT_UP:
        return {userName: 'RN03'}
    default:
      return {...state};
  }
};

export default userReducer;
