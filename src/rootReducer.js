import { combineReducers } from "redux";
import incReducer from "./incReducer";
const rootReducer = combineReducers({
  incReducer,
});

export default rootReducer;
