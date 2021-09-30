import React, { useReducer } from "react";
import { v4 as uuid } from "uuid";

import projectContext from "./projectContext";
import projectReducer from "./projectReducer";
import {
    PROJECT_FORMULAR,
    FETCH_PROJECTS,
    ADD_PROJECT,
    VALIDATE_FORM,
    ACTIVE_PROJECT,
    DELETE_PROJECT,
} from "../../types/index";

const ProjectState = (props) => {
    const projects = [
        { id: 1, name: "Virtual Store" },
        { id: 2, name: "Intranet" },
        { id: 3, name: "Webpage design" },
        { id: 4, name: "MERN" },
    ];

    const initialState = {
        projects: [],
        formular: false,
        emptyForm: false,
        project: null,
    };

    //dispatch to execute functions
    const [state, dispatch] = useReducer(projectReducer, initialState);

    //functions for CRUD
    const showFormular = () => {
        dispatch({
            type: PROJECT_FORMULAR,
        });
    };

    const fetchProjects = () => {
        dispatch({
            type: FETCH_PROJECTS,
            payload: projects,
        });
    };

    const addProject = (project) => {
        project.id = uuid();
        dispatch({
            type: ADD_PROJECT,
            payload: project,
        });
    };

    const emptyFormError = () => {
        dispatch({
            type: VALIDATE_FORM,
        });
    };

    const activateProject = (project) => {
        dispatch({
            type: ACTIVE_PROJECT,
            payload: project,
        });
    };

    const deleteProject = (projectId) => {
        dispatch({
            type: DELETE_PROJECT,
            payload: projectId,
        });
    };

    return (
        <projectContext.Provider
            value={{
                projects: state.projects,
                formular: state.formular,
                emptyForm: state.emptyForm,
                project: state.project,
                showFormular,
                fetchProjects,
                addProject,
                emptyFormError,
                activateProject,
                deleteProject,
            }}
        >
            {props.children}
        </projectContext.Provider>
    );
};

export default ProjectState;
