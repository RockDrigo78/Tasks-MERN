import React, { Fragment, useState, useContext } from "react";
import projectContext from "../../context/projects/projectContext";

const NewProject = () => {
    const projectsContext = useContext(projectContext);

    const { formular } = projectsContext;

    const [project, addProject] = useState({
        name: "",
    });

    const { name, id } = project;

    const onChange = (e) => {
        addProject({
            ...project,
            name: e.target.value,
        });
        console.log(project.name);
    };

    const onSubmit = (e) => {
        e.preventDefault();
        if (name.length === 0) return;

        console.log("name: ", name);

        addProject({ ...project, name: "" });
    };

    return (
        <Fragment>
            <button type="button" className="btn btn-block btn-primario">
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
        </Fragment>
    );
};

export default NewProject;
