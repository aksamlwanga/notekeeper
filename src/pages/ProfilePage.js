import React, { useContext } from "react";
import { UserContext } from "../Providers/UserProvider";
import { auth } from "../firebase";
import Notes from "./Notes";
const ProfilePage = () => {
    const user = useContext(UserContext);
    const { photoURL, displayName, email } = user;
    return (
        <div>
            <div>
                <div style={
                    {
                        background: `url(${photoURL || 'https://res.cloudinary.com/dqcsk8rsc/image/upload/v1577268053/avatar-1-bitmoji_upgwhc.png'})  no-repeat center center`,
                        backgroundSize: "cover",
                        height: "200px",
                        width: "200px"
                    }
                }
                    className="border border-blue-300" >
                </div>
                <div className="md:pl-4" >
                    <h2 className="text-2xl font-semibold" > {displayName} </h2>
                    < h3 className="italic" > {email} </h3>
                </div>
            </div>
            <Notes />
            < button onClick={() => { auth.signOut() }} >
                Sign out
             </button>
        </div>
    )
};
export default ProfilePage;