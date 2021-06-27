import React, { useEffect } from "react";
import { Redirect, NavLink } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { hostEvents } from '../../store/careerfair';
import { getRegisteredEves } from "../../store/registration";
import "./ProfilePage.css";

const ProfilePage = () => {
    const dispatch = useDispatch();
    const sessionUser = useSelector(state => state.session.user);
    const userEvents = useSelector(state => Object.values(state.careerFair.userEvents));
    const userRegistrations = useSelector(state => Object.values(state.registerFair.registrations));
    
    useEffect(() => {
        dispatch(hostEvents(sessionUser.id));
        dispatch(getRegisteredEves(sessionUser.id));
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
            <div className="profile-items">
                <div className="events-container">
                    {userEvents && userEvents.map(event => (
                        <div className="single-event-container" key={event.id}>
                            <NavLink to={`/event/${event.id}`} className="event-links">
                                {event.name}
                            </NavLink>
                            <span>{convertDate(event.date)}</span>
                        </div>
                    ))}
                </div>
                <div className="events-container">
                    {userRegistrations && userRegistrations.map(register => (
                        <div className="single-event-container" key={register.id}>
                            <NavLink to={`/event/${register.career_fair_id}`} className="event-links">
                                {register.Career_fair.name}
                            </NavLink>
                            <span>{convertDate(register.Career_fair.date)}</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default ProfilePage;
