import { ActionTypes } from "./ActionTypes";

const initialState = {task: []}

export const TaskReducer = (state= initialState, action) => {
    switch (action.type){
        case ActionTypes.getTasks : 
        return {...state, task: action.payload}
        default: return state
    }
}