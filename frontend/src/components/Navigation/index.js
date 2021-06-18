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
            <>
                <NavLink to="/login">Log In</NavLink>
                <NavLink to="/signup">Sign Up</NavLink>
            </>
        );
    }

    return (
        <>
            <ul>
                <li>
                    <NavLink exact to="/">Home</NavLink>
                    {isLoaded && sessionLinks}
                </li>
            </ul>
        </>
    );
}

export default Navigation;
