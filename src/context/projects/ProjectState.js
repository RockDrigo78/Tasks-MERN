import React, { useReducer } from "react";

import projectContext from "./projectContext";
import projectReducer from "./projectReducer";
import { PROJECT_FORMULAR } from "../../types";

const ProjectState = (props) => {
    const initialState = {
        formular: false,
    };

    //dispatch to execute functions

    const [state, dispatch] = useReducer(projectReducer, initialState);

    return (
        <projectContext.Provider
            value={{
                formular: state.formular,
            }}
        >
            {props.children}
        </projectContext.Provider>
    );
};

export default ProjectState;
