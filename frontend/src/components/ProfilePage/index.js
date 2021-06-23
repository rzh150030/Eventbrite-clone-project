import React, { useEffect, useState } from "react";
import { Redirect, useParams, useHistory, NavLink } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { hostEvents } from '../../store/careerfair';

const ProfilePage = () => {
    const history = useHistory();
    const dispatch = useDispatch();
    const sessionUser = useSelector(state => state.session.user);
    const userEvents = useSelector(state => Object.values(state.careerFair.userEvents));

    useEffect(() => {
        dispatch(hostEvents(sessionUser.id));
    }, [dispatch]);

    if (!sessionUser) return <Redirect to="/"/>;

    return (
        <div>
            <span>Events Hosted</span>
            <div>
                {userEvents && userEvents.map(event => (
                    <NavLink to={`/event/${event.id}`} key={event.id}>
                        {event.name}
                    </NavLink>
                ))}
            </div>
        </div>
    );
}

export default ProfilePage;
