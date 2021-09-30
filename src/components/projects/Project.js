import React from "react";
// import projectContext from "../../context/projects/projectContext";

const Project = ({ project }) => {
    return (
        <li>
            <button type="button" className="btn btn-blank">
                {project.name}
            </button>
        </li>
    );
};

export default Project;
