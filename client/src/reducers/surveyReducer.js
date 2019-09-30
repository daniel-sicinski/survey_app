import { FETCH_SURVEYS } from "../actions/types";

const surveysReducer = (state = [], action) => {
  switch (action.type) {
    case FETCH_SURVEYS:
      console.log([...state, ...action.payload]);
      return [...state, ...action.payload];
    default:
      return state;
  }
};

export default surveysReducer;
