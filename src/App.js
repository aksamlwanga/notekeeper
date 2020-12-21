import React from "react";
import Application from "./Components/Application";
import UserProvider from "./Providers/UserProvider";
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';

function App() {
    return (
        <UserProvider >
            <Application />
        </UserProvider>
    );
}
export default App;