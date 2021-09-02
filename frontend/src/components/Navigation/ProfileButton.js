import React from "react";
import { useHistory } from "react-router";
import './Navigation.css';

const ProfileButton = () => { //go to user profile page
    const history = useHistory();

    const goToProfile = () => {
        history.push("/profile");
    }

    return (
        <i className="fas fa-user" onClick={goToProfile}>
        </i>
    );
}

export default ProfileButton;
