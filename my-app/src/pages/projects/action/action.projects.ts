import {ActionType, createAction, createAsyncAction} from "typesafe-actions";
import {Project, User} from "../../../types";


export const projectActions = {
    add: createAction("ADD")<Project>(),
    remove: createAction("REMOVE")<number>(),
    update: createAction("UPDATE")<Project>()
};

export const userActions = {
    add: createAction("ADD_USER")<User>(),
    get: createAsyncAction("FETCH_USER_REQUEST",
        "FETCH_USER_SUCCESS",
        "FETCH_USER_FAILURE")<undefined, User[], undefined>()
}

export type ActionsProject = ActionType<typeof projectActions>
export type ActionsUser = ActionType<typeof userActions>
