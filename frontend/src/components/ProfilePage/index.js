import React, { useEffect } from "react";
import { Redirect, NavLink } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { hostEvents } from '../../store/careerfair';

const ProfilePage = () => {
    const dispatch = useDispatch();
    const sessionUser = useSelector(state => state.session.user);
    const userEvents = useSelector(state => Object.values(state.careerFair.userEvents));

    useEffect(() => {
        dispatch(hostEvents(sessionUser.id));
    }, [dispatch, sessionUser.id]);

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
