import React, { Fragment } from "react";
import Task from "./Task";

const TaskList = () => {
    const tasks = [
        { name: "Choose platform", state: true },
        { name: "Choose colors", state: false },
        { name: "Choose payment platform", state: false },
        { name: "Choose hosting", state: true },
    ];

    return (
        <Fragment>
            <h2>Project: Virtual Store</h2>

            <ul className="listado-tareas">
                {tasks.length === 0 ? (
                    <li className="task">
                        <p>No Tasks</p>
                    </li>
                ) : (
                    tasks.map((task, index) => <Task task={task} key={index} />)
                )}
            </ul>
            <button type="button" className="btn btn-eliminar">
                Delete Task &times;
            </button>
        </Fragment>
    );
};

export default TaskList;
