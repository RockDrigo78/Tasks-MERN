import React, { Fragment, useContext } from "react";
import Task from "./Task";
import projectContext from "../../context/projects/projectContext";

const TaskList = () => {
    const projectsContext = useContext(projectContext);

    const { project, deleteProject } = projectsContext;

    if (!project) return <h2>Please select a project</h2>;

    const [activeProject] = project;

    const tasks = [
        { name: "Choose platform", state: true },
        { name: "Choose colors", state: false },
        { name: "Choose payment platform", state: false },
        { name: "Choose hosting", state: true },
    ];

    return (
        <Fragment>
            <h2>Project: {activeProject.name}</h2>

            <ul className="listado-tareas">
                {tasks.length === 0 ? (
                    <li className="task">
                        <p>No Tasks</p>
                    </li>
                ) : (
                    tasks.map((task, index) => <Task task={task} key={index} />)
                )}
            </ul>
            <button
                type="button"
                className="btn btn-eliminar"
                onClick={() => deleteProject(activeProject)}
            >
                Delete Task &times;
            </button>
        </Fragment>
    );
};

export default TaskList;
