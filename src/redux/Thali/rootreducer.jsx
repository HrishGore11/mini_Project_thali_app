import { combineReducers } from "redux";
import thalireducer from "../Thali/thali-reducer";
const rootReducer = combineReducers({
  thali: thalireducer
});

export default rootReducer;
