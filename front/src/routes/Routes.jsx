import React from "react";
import { Switch, Route } from "react-router-dom";

import FirstHome from "../components/pages/FirstHome";
import Signup from "../components/pages/Signup";
import Signin from "../components/pages/Signin";
import CategoryHome from "../components/pages/CategoryHome";
import TasksPage from "../components/pages/TasksPage";


export default function Routes() {
    return (
        <Switch>
            <Route path="/tasks">
                <TasksPage />
            </Route>
            <Route path="/categoryhome">
                <CategoryHome />
            </Route>
            <Route path="/signin">
                <Signin />
            </Route>
            <Route path="/signup">
                <Signup />
            </Route>
            <Route exact path="/">
                <FirstHome />
            </Route>
            
        </Switch>
    )
}

