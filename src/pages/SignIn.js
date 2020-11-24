import React, { useState } from "react";
import { auth, provider } from '../firebase'
import {
    Link
} from "react-router-dom";


const SignIn = () => {
    // const [email, setEmail] = useState('');
    // const [password, setPassword] = useState('');
    const [error, setError] = useState(null);
    // const signInWithEmailAndPasswordHandler =
    //     (event, email, password) => {
    //         event.preventDefault();
    //     };

    // const onChangeHandler = (event) => {
    //     const { name, value } = event.currentTarget;

    //     if (name === 'userEmail') {
    //         setEmail(value);
    //     } else if (name === 'userPassword') {
    //         setPassword(value);
    //     }
    // };

    return (
        < div className="\" >
            <h1 className="" > Sign In </h1>
            <div className="" >
                {
                    error !== null &&
                    < div className="" > {error}
                    </div>
                }
                {/* <form className="" >
                    <label htmlFor="userEmail" className="block" >
                        Email:
                    </label>
                    <input
                        type="email"
                        className="my-1 p-1 w-full"
                        name="userEmail"
                        value={email}
                        placeholder="E.g: faruq123@gmail.com"
                        id="userEmail"
                        onChange={
                            (event) => onChangeHandler(event)
                        }
                    />
                    <label htmlFor="userPassword"
                        className="block" >
                        Password:
                   </label>
                    <input
                        type="password"
                        className=""
                        name="userPassword"
                        value={password}
                        placeholder="Your Password"
                        id="userPassword"
                        onChange={
                            (event) => onChangeHandler(event)
                        }
                    />
                    <button className=""
                        onClick={
                            (event) => { signInWithEmailAndPasswordHandler(event, email, password) }
                        } >
                        Sign in
                </button> */}
                {/* </form > */}
                < p className="" > or </p>
                < button
                    onClick={() => auth.signInWithPopup(provider)}
                    className="" >
                    Sign in with Google
                 </button>
                <p className="" >
                    Don 't have an account?{" "}
                    <Link to="/"
                        className="" >
                        Sign up here
                 </Link>
                </p>
            </div >
        </div>
    );
};
export default SignIn;