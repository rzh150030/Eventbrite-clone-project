import ProfileButton from "./ProfileButton";
import React from 'react';
import { useSelector } from 'react-redux';
import {NavLink} from "react-router-dom";
import {logout} from "../../store/session";
import {useDispatch} from "react-redux";
import './Navigation.css';

const Navigation = ({isLoaded}) => {
    const dispatch = useDispatch();
    const sessionUser = useSelector(state => state.session.user);

    const logOutUser = () => {
        dispatch(logout());
    }

    let sessionLinks;
    if (sessionUser) {
        sessionLinks = (
            <>
                <ProfileButton user={sessionUser}/>
                <button onClick={logOutUser}>Log Out</button>
            </>
        );
    }
    else {
        sessionLinks = (
            <div className="session-links">
                <NavLink to="/login">Log In</NavLink>
                <NavLink to="/signup" id="signup-link">Sign Up</NavLink>
            </div>
        );
    }

    return (
        <>
            <div className="navbar">
                <div className="home">
                    <NavLink exact to="/">Home</NavLink>
                </div>
                <NavLink to="/createfair">Create a Career Fair</NavLink>
                {isLoaded && sessionLinks}
            </div>
        </>
    );
}

export default Navigation;
