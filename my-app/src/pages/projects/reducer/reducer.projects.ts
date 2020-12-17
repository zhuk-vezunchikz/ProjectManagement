import {combineReducers} from "redux";
import {Project, User} from "../../../types";
import {action, createReducer, isActionOf} from "typesafe-actions";
import initialState from "../../../redux/initialState";
import {ActionsProject, ActionsUser, projectActions, userActions} from "../action/action.projects";
import {ajax} from "rxjs/ajax";
import {combineEpics, Epic} from "redux-observable";
import {filter, map, mergeMap} from "rxjs/operators";

export interface ProjectState {
    projects: Project[],
    users: User[],
}


const fetchUserEpic: Epic<ActionsUser> = action$ => action$.pipe(
    filter(isActionOf(userActions.get.request)),
    mergeMap(action =>
        ajax
            .getJSON('https://github.com/zhuk-vezunchikz/ProjectManagement/projects/{project_id}/collaborators')),
    map(response => userActions.get.success(response as User[]))
)


export const projectEpic = combineEpics(fetchUserEpic)

export const reducer = combineReducers<ProjectState>({
    users: createReducer<User[], ActionsUser>(initialState.users)
        .handleAction(userActions.get.success, (state, action) => {
            return action.payload
        })
        .handleAction(userActions.add, (state, action) => {
            debugger
            const newArr = state.concat();
            newArr[0].id = action.payload.id;
            newArr[0].name = action.payload.name;
            return [...newArr]
        }),
    projects: createReducer<Project[], ActionsProject>(initialState.projects)

        .handleAction(projectActions.update, (state, action) => {
            return [...state]
        })
        .handleAction(projectActions.remove, (state, action) => {
            const arr = state.concat();
           const newArr = arr.filter(item => item.id !== action.payload)
            return [...newArr ]
        })
        .handleAction(projectActions.add, (state, action) => {
            return [...state, action.payload]
        }),
})