import React, { useState } from "react";
import { MDBContainer, MDBRow, MDBCol, MDBBtn ,MDBModalFooter,MDBCardBody,MDBInput,MDBCard,MDBIcon} from 'mdbreact';
import { auth, provider ,generateUserDocument} from '../firebase'
import {
    Link
} from "react-router-dom";

const SignUp = () => {
    const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [displayName, setDisplayName] = useState("");
  const [error, setError] = useState(null);

  const createUserWithEmailAndPasswordHandler = async (event, email, password) => {
    event.preventDefault();
    try{
      const {user} = await auth.createUserWithEmailAndPassword(email, password);
      generateUserDocument(user, {displayName});
    }
    catch(error){
      setError('Error Signing up with email and password');
    }
      
    setEmail("");
    setPassword("");
    setDisplayName("");
  };

  const onChangeHandler = event => {
    const { name, value } = event.currentTarget;

    if (name === "email") {
      setEmail(value);
    } else if (name === "password") {
      setPassword(value);
    } else if (name === "displayname") {
      setDisplayName(value);
    }
  };

    return (

          
        <MDBContainer >
            { error?<p>{error}</p>:""}
            <MDBRow >
                <MDBCol md="6 mx-auto">
                    <MDBCard >
                        <MDBCardBody className="mx-4">
                            <div className="text-center">
                                <h3 className="dark-grey-text mb-5">
                                    <strong>Sign Up</strong>
                                </h3>
                            </div>
                            <MDBInput
                                label="Your username"
                                group
                                type="text"
                                validate
                                error="wrong"
                                success="right"
                                name="displayname"
                                value={displayName}
                                onChange={(event) => onChangeHandler(event)}
                                
                            
                            />
                             <MDBInput
                                label="Your email"
                                group
                                type="email"
                                validate
                                error="wrong"
                                success="right"
                                name="email"
                                value={email}
                                onChange={(event) => onChangeHandler(event)}
                            />
                             <MDBInput
                                label="Your password"
                                group
                                type="password"
                                validate
                                error="wrong"
                                success="right"
                                name="password"
                                value={password}
                                onChange={(event) => onChangeHandler(event)}
                            />
                            <MDBInput
                                label="Confirm password"
                                group
                                type="password"
                                validate
                                containerClass="mb-0"
                            />
                            <div className="text-center mb-3">
                                <MDBBtn
                                    type="button"
                                    gradient="blue"
                                    rounded
                                    className="btn-block z-depth-1a"
                                    onClick={event => {
                                        createUserWithEmailAndPasswordHandler(event, email, password);
                                      }}
                                >
                                    Sign Up
                               </MDBBtn>
                            </div>
                            <p className="font-small dark-grey-text text-right d-flex justify-content-center mb-3 pt-2">

                                or Sign Up with:
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
                                    className="z-depth-1a"
                                    onClick={() => auth.signInWithPopup(provider)}
                                >
                                    <MDBIcon fab icon="google-plus-g" className="blue-text" />
                                </MDBBtn>
                            </div>
                        </MDBCardBody>
                        <MDBModalFooter className="mx-5 pt-3 mb-1">
                            <p className="font-small grey-text d-flex justify-content-end">
                                Already A member?
                            <Link to="/signup" className="blue-text ml-1">

                                    Sign In
                             </Link>
                            </p>
                        </MDBModalFooter>
                    </MDBCard>
                </MDBCol>
            </MDBRow>
        </MDBContainer>
    );
};

export default SignUp;