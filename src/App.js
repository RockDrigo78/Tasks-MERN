import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Login from "./components/authentication/Login";
import NewAccount from "./components/authentication/NewAccount";
import Projects from "./components/projects/Projects";

import ProjectState from "./context/projects/ProjectState";

function App() {
    return (
        <ProjectState>
            <BrowserRouter>
                <Switch>
                    <Route exact path="/" component={Login} />
                    <Route exact path="/new-account" component={NewAccount} />
                    <Route exact path="/projects" component={Projects} />
                </Switch>
            </BrowserRouter>
        </ProjectState>
    );
}

export default App;
