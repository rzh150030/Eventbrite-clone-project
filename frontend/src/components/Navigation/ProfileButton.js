import React from "react";
import { useHistory } from "react-router";

const ProfileButton = ({user}) => { //go to user profile page
    const history = useHistory();

    const goToProfile = () => {
        history.push("/profile");
    }

    return (
        <>
            <button onClick={goToProfile}>
                <i className="fas fa-user"></i>
            </button>
        </>
    );
}

export default ProfileButton;
