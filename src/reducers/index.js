import { combineReducers } from "redux";
import { reducer as form } from "redux-form";
// this will give us the ability to type into the form
const rootReducer = combineReducers({
  form,
});

export default rootReducer;
