import React, { useEffect } from "react";
import { Redirect, NavLink } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { hostEvents } from '../../store/careerfair';
import "./ProfilePage.css";

const ProfilePage = () => {
    const dispatch = useDispatch();
    const sessionUser = useSelector(state => state.session.user);
    const userEvents = useSelector(state => Object.values(state.careerFair.userEvents));

    useEffect(() => {
        dispatch(hostEvents(sessionUser.id));
    }, [dispatch, sessionUser.id]);

    const convertDate = (date) => {
        let time = Date.parse(date);
        let formatDate = new Date(time);
        return formatDate.toString();
    }

    if (!sessionUser) return <Redirect to="/"/>;

    return (
        <div>
            <div className="user-events-label">
                <span>Events Hosted</span>
                <span>Registered Events</span>
            </div>
            {/* <span className="user-events-label">Registered Events</span> */}
            <div className="hosted-event-container">
                {userEvents && userEvents.map(event => (
                    <div className="host-event-container" key={event.id}>
                        <NavLink to={`/event/${event.id}`} className="hosted-event-links">
                            {event.name}
                        </NavLink>
                        <span>{convertDate(event.date)}</span>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default ProfilePage;
