import React, { Fragment, useState, useContext } from "react";
import projectContext from "../../context/projects/projectContext";

const NewProject = () => {
    const projectsContext = useContext(projectContext);

    const { formular, showFormular, emptyForm, addProject, emptyFormError } =
        projectsContext;

    const [project, newProjectName] = useState({
        name: "",
    });

    const { name } = project;

    const onChange = (e) => {
        newProjectName({
            ...project,
            name: e.target.value,
        });
    };

    const onSubmit = (e) => {
        e.preventDefault();

        if (name === "") {
            emptyFormError();
            return;
        }

        addProject(project);

        newProjectName({ name: "" });
    };

    return (
        <Fragment>
            <button
                type="button"
                className="btn btn-block btn-primario"
                onClick={() => showFormular()}
            >
                New Project
            </button>

            {formular ? (
                <form onSubmit={onSubmit} className="formulario-nuevo-proyecto">
                    <input
                        type="text"
                        className="input-text"
                        placeholder="Project Name"
                        name="name"
                        value={name}
                        onChange={onChange}
                    />
                    <input
                        type="submit"
                        className="btn btn-primario btn-block"
                        value="Add Project"
                    />
                </form>
            ) : null}

            {emptyForm ? (
                <p className="mensaje error">Please enter a name</p>
            ) : null}
        </Fragment>
    );
};

export default NewProject;
