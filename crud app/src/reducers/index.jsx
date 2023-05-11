import { combineReducers } from "redux";
import reducer from "./reducer";

const rootReduser = combineReducers({
    reducer: reducer,
})

export default rootReduser;