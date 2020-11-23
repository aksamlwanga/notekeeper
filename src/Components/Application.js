import react from "react"
import React, { useContext } from "react";
import { UserContext } from "../Providers/UserProvider";
import '../pages/ProfilePage'
import ProfilePage from '../pages/ProfilePage';
import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';


function Application() {
    const user = useContext(UserContext);
    return (
        user ?
        <
        ProfilePage / >
        :
        <
        Router >
        <
        Switch >
        <
        Route exact path = "/"
        component = { SignIn }
        /><
        Route path = "/signup"
        component = { SignUp }
        />

        <
        /Switch> < /
        Router >
    );
}

export default Application;