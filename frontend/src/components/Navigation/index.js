import ProfileButton from "./ProfileButton";
import React from 'react';
import { useSelector } from 'react-redux';
import {NavLink, useHistory} from "react-router-dom";
import {logout} from "../../store/session";
import {useDispatch} from "react-redux";
import './Navigation.css';

const Navigation = ({isLoaded}) => {
    const dispatch = useDispatch();
    const history = useHistory();
    const sessionUser = useSelector(state => state.session.user);

    const logOutUser = () => {
        dispatch(logout());
    }

    const loginButton = () => {
        history.push("/login");
    };

    const signupButton = () => {
        history.push("/signup");
    };

    let sessionLinks;
    if (sessionUser) {
        sessionLinks = (
            <>
                <ProfileButton user={sessionUser}/>
                <button onClick={logOutUser} className="session-button">Log Out</button>
            </>
        );
    }
    else {
        sessionLinks = (
            <>
                <button onClick={loginButton} className="session-button">Log In</button>
                <button onClick={signupButton} className="session-button">Sign Up</button>
            </>
        );
    }

    return (
        <>
            <div className="navbar">
                <div>
                    <NavLink exact to="/" className="home">IT Fairs for Hires</NavLink>
                </div>
                <NavLink to="/createfair" className="create-fair">Create a Career Fair</NavLink>
                {isLoaded && sessionLinks}
            </div>
        </>
    );
}

export default Navigation;
