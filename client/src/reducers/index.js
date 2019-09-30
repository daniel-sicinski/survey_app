import { combineReducers } from "redux";
import authReducer from "./authReducer";
import surveyReducer from "./surveyReducer";
import { reducer as FormReducer } from "redux-form";

export default combineReducers({
  auth: authReducer,
  form: FormReducer,
  surveys: surveyReducer
});
