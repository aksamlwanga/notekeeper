import React, { useState } from "react";
import { auth, provider } from '../firebase'
import { MDBContainer, MDBRow, MDBCol, MDBCard, MDBCardBody, MDBInput, MDBBtn, MDBIcon, MDBModalFooter,MDBAlert } from 'mdbreact';
import {
    Link
} from "react-router-dom";


const SignIn = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(null);

    const signInWithEmailAndPasswordHandler =
        (event, email, password) => {
            event.preventDefault();
            console.log(email,password)
            auth.signInWithEmailAndPassword(email, password).catch(error => {
                setError("Error signing in with password and email!");
            });
        };

    const onChangeHandler = (event) => {
        const { name, value } = event.currentTarget;

        if (name === 'userEmail') {
            setEmail(value);
        } else if (name === 'userPassword') {
            setPassword(value);
        }
    };

    return (

        <MDBContainer >
            <MDBRow >
                <MDBCol md="6 mx-auto">
                    <MDBCard >
                        <MDBCardBody className="mx-4">
                            <div className="text-center">
                                <h3 className="dark-grey-text mb-5">
                                    <strong>Sign in</strong>
                                </h3>
                            </div>
                            {
                               !error?"": 
                            
                            <MDBAlert color="warning" dismiss>
                                <strong>Ooops!</strong> {error}
                            </MDBAlert>
                            }
                            <MDBInput
                                label="Your email"
                                group
                                type="email"
                                validate
                                error="wrong"
                                success="right"
                                name="userEmail"
                                value={email}
                                onChange={(event) => onChangeHandler(event)}
                            />
                            <MDBInput
                                label="Your password"
                                group
                                type="password"
                                validate
                                containerClass="mb-0"
                                name="userPassword"
                                value={password}
                                onChange={(event) => onChangeHandler(event)}
                            />
                            <p className="font-small blue-text d-flex justify-content-end pb-3">
                                Forgot
                               <a href="#!" className="blue-text ml-1">

                                    Password?
                               </a>
                            </p>
                            <div className="text-center mb-3">
                                <MDBBtn
                                    type="button"
                                    gradient="blue"
                                    rounded
                                    className="btn-block z-depth-1a"
                                    onClick={(event) => { signInWithEmailAndPasswordHandler(event, email, password) }}
                                >
                                    Sign in
                               </MDBBtn>
                            </div>
                            <p className="font-small dark-grey-text text-right d-flex justify-content-center mb-3 pt-2">

                                or Sign in with:
                            </p>
                            <div className="row my-3 d-flex justify-content-center">
                                <MDBBtn
                                    type="button"
                                    color="white"
                                    rounded
                                    className="mr-md-3 z-depth-1a"
                                >
                                    <MDBIcon fab icon="facebook-f" className="blue-text text-center" />
                                </MDBBtn>
                                <MDBBtn
                                    type="button"
                                    color="white"
                                    rounded
                                    className="mr-md-3 z-depth-1a"
                                >
                                    <MDBIcon fab icon="twitter" className="blue-text" />
                                </MDBBtn>
                                <MDBBtn
                                    type="button"
                                    color="white"
                                    rounded
                                    className="z-depth-1a"
                                    onClick={() => auth.signInWithPopup(provider)}
                                >
                                    <MDBIcon fab icon="google-plus-g" className="blue-text" />
                                </MDBBtn>
                            </div>
                        </MDBCardBody>
                        <MDBModalFooter className="mx-5 pt-3 mb-1">
                            <p className="font-small grey-text d-flex justify-content-end">
                                Not a member?
                            <Link to="/signup" className="blue-text ml-1">

                                    Sign Up
                             </Link>
                            </p>
                        </MDBModalFooter>
                    </MDBCard>
                </MDBCol>
            </MDBRow>
}
        </MDBContainer>
    );
};
export default SignIn;