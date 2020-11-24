import React, { useState } from "react";
import { auth, provider } from '../firebase'
import {
    Link
} from "react-router-dom";

const SignUp = () => {

    return (
        <div>
            <p className=""> or </p>
            <button onClick={() => auth.signInWithPopup(provider)}
                className="" >
                Sign in with Google
                 </button>
            <p className="" ></p>
                Already Have an account?{" "}
                <Link to="/signin"
                    className="" >
                    Sign in
                 </Link>
        </div>
    );
};
export default SignUp;