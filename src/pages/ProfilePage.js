import React, { useContext } from "react";
import { UserContext } from "../Providers/UserProvider";
import { MDBCard, MDBCardBody, MDBRow, MDBCol, MDBBtn, MDBContainer, MDBBreadcrumb, MDBBreadcrumbItem } from 'mdbreact';
import { auth } from "../firebase";
import Notes from "./Notes";
const ProfilePage = () => {
    const user = useContext(UserContext);
    const { photoURL, displayName, email } = user;
    return (
        <MDBContainer>
            <MDBBreadcrumb style={{backgroundColor:"lightseagreen" }}>
                <MDBBreadcrumbItem active >Home</MDBBreadcrumbItem>
            </MDBBreadcrumb>
            <MDBRow>
                <MDBCol md="8">
                    <Notes />
                </MDBCol>
                <MDBCol md="4"  >
                    <MDBCard testimonial >
                        <span className='indigo lighten-1' ></span>
                        <div className='avatar mx-auto white'>
                            <img
                                src={photoURL || 'https://mdbootstrap.com/img/Photos/Avatars/img%20%2810%29.jpg'}
                                alt=''
                            />
                        </div>
                        <MDBCardBody className="">
                            <h4 className='card-title'>{displayName}</h4>
                            <hr />
                            <p>

                                {email}
                            </p>
                            < MDBBtn style={{ float: "right" }} onClick={() => { auth.signOut() }} >
                                Sign out
                           </MDBBtn>
                        </MDBCardBody>
                    </MDBCard>


                </MDBCol>

            </MDBRow>




        </MDBContainer>

    )
};
export default ProfilePage;