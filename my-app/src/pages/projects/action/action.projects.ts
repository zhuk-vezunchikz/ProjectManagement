import {ActionType, createAction} from "typesafe-actions";
import {Project} from "../../../types";


export const projectActions = {add: createAction("ADD")<Project>(), remove: createAction("REMOVE")<number>()};

export type Actions = ActionType<typeof projectActions>
