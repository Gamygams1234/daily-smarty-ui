import { combineReducers } from "redux";
import { reducer as form } from "redux-form";
import posts from "./postsReducer";
// this will give us the ability to type into the form
const rootReducer = combineReducers({
  form,
  posts,
});

export default rootReducer;
