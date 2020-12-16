import { createStore } from 'redux';
import {reducer} from "../pages/projects/reducer/reducer.projects";

const store = createStore(reducer);

export default store;