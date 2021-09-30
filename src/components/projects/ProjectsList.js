import React from "react";
import Project from "./Project";

const ProjectsList = () => {
    const projects = [
        { name: "Virtual Store" },
        { name: "Intranet" },
        { name: "Webpage design" },
    ];

    return (
        <ul className="listado-proyectos">
            {projects.map((project, index) => (
                <Project project={project} key={index} />
            ))}
        </ul>
    );
};

export default ProjectsList;
