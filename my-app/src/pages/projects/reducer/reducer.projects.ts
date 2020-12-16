import {combineReducers} from "redux";
import {Project} from "../../../types";
import {createReducer} from "typesafe-actions";
import initialState from "../../../redux/initialState";
import {Actions, projectActions} from "../action/action.projects";

export interface ProjectState {
    projects: Project[]
}

export const reducer = combineReducers<ProjectState>({
    projects: createReducer<Project[], Actions>(initialState.projects)
        .handleAction(projectActions.add, (state, action) => {
            return [...state, action.payload]
        })
})