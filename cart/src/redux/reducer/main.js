import { combineReducers } from "redux";
import { cartreducer } from "./reducer";

// compbine all reducers in one variable
const rootreducer = combineReducers({
    cartreducer
});

export default rootreducer;