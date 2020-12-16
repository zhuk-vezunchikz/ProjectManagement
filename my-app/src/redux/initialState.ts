import {ProjectState} from "../pages/projects/reducer/reducer.projects";

const initialState: ProjectState = {
    projects: [{id: 1, name: "Project_1", description: "Description_1", user: {id:1, name: "Петя"}},
        {id: 2, name: "Project_2", description: "Description_2", user: {id:2, name: "Петя"}},
        {id: 3, name: "Project_3", description: "Description_3", user: {id:3, name: "Петя"}}]
};

export default initialState;