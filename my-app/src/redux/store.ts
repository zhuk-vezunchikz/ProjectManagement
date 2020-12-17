import {applyMiddleware, createStore} from 'redux';
import {rootEpic, reducer} from "../pages/projects/reducer/reducer.projects";
import {createEpicMiddleware} from "redux-observable";
import {composeWithDevTools} from "redux-devtools-extension";

const epicMiddleware = createEpicMiddleware();

export default function configureStore() {
    const store = createStore(reducer, composeWithDevTools(applyMiddleware(epicMiddleware)));
    epicMiddleware.run(rootEpic)
    return store;
}


