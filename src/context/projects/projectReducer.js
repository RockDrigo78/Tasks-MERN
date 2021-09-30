import {
    PROJECT_FORMULAR,
    FETCH_PROJECTS,
    ADD_PROJECT,
    VALIDATE_FORM,
} from "../../types/index";

export default (state, action) => {
    switch (action.type) {
        case PROJECT_FORMULAR:
            return {
                ...state,
                formular: true,
            };
        case FETCH_PROJECTS:
            return {
                ...state,
                projects: action.payload,
            };
        case ADD_PROJECT:
            return {
                ...state,
                projects: [...state.projects, action.payload],
                formular: false,
                emptyForm: false,
            };
        case VALIDATE_FORM:
            return {
                ...state,
                emptyForm: true,
            };
        default:
            return state;
    }
};
