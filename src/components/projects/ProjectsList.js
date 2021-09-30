import React, { useContext, useEffect } from "react";
import Project from "./Project";
import projectContext from "../../context/projects/projectContext";

const ProjectsList = () => {
    const projectsContext = useContext(projectContext);
    const { projects, fetchProjects } = projectsContext;

    useEffect(() => {
        fetchProjects();
    }, []);

    if (projects.length === 0) return <p>No projects</p>;

    return (
        <ul className="listado-proyectos">
            {projects.map((project) => (
                <Project project={project} key={project.id} />
            ))}
        </ul>
    );
};

export default ProjectsList;
