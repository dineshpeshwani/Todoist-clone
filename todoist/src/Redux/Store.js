import {TaskReducer} from "./Reducer";
import {createStore} from "redux";

export const store = createStore(TaskReducer)
