import React from "react";
import NewProject from "../projects/NewProject";
import ProjectsList from "../projects/ProjectsList";

const Sidebar = () => {
    return (
        <aside>
            <h1>
                MERN <span>Task</span>
                <NewProject />
                <div className="proyectos">
                    <h2>Your Projects</h2>
                    <ProjectsList />
                </div>
            </h1>
        </aside>
    );
};

export default Sidebar;
