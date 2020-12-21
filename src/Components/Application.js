import React, { useContext } from "react";
import { UserContext } from "../Providers/UserProvider";
import '../pages/ProfilePage'
import ProfilePage from '../pages/ProfilePage';
import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';
import Error from '../pages/Error';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';


function Application() {
    const user = useContext(UserContext);
    return (
        user ?
            <Router>
                <Switch>
                    <Route path="/"
                        component={ProfilePage}
                    />
                    <Route component={Error} />

                </Switch>

            </Router>
            :
            <Router >
                < Switch >
                    <Route exact path="/"
                        component={SignIn}
                    />
                    <Route path="/signup"
                        component={SignUp}
                    />
                    <Route component={Error} />
                </Switch>
            </ Router >
    );
}

export default Application;