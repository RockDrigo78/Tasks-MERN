import React, { useContext } from "react";
import projectContext from "../../context/projects/projectContext";

const TaskForm = () => {
    const projectsContext = useContext(projectContext);

    const { project } = projectsContext;

    if (!project) return null;

    // const [activeProject] = project;

    return (
        <div className="formulario">
            <form>
                <div className="contenedor-input">
                    <input
                        type="text"
                        className="input-text"
                        placeholder="Task Name"
                        name="name"
                    />
                </div>
                <div className="contenedor-input">
                    <input
                        type="submit"
                        className="btn btn-primario btn-submit btn-block"
                        value="Add Task"
                    />
                </div>
            </form>
        </div>
    );
};

export default TaskForm;
