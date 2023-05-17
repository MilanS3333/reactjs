import { createStore } from "redux";
import rootreducer from "./redux/reducer/main";

// get data from reducer and send specific file
const store = createStore(
    rootreducer
)

export default store;