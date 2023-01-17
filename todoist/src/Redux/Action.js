import { ActionTypes } from "./ActionTypes";

export const getTask = (task) => {
    return{
        type: ActionTypes.getTasks,
        payload: task
    }
}