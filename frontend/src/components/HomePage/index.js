import React, { useEffect } from 'react';
import { Redirect } from 'react-router';
import { useSelector, useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { clearRegState } from "../../store/registration";
import "./HomePage.css";

export default function HomePage() {
    const dispatch = useDispatch();
    const eventsList = useSelector(state => Object.values(state.careerFair.event));
    const sessionUser = useSelector(state => state.session.user);

    useEffect(() => {
        dispatch(clearRegState());
    }, [dispatch]);

    if (!sessionUser) {
        return <Redirect to="/login" />
    }

    const convertDate = (date) => {
        let time = Date.parse(date);
        let formatDate = new Date(time);
        return formatDate.toString();
    }

    return (
        <div className="home-page">
            <div className="welcome-message-container">
                <span>List of Upcoming Events</span>
            </div>
            <div className="home-content-container">
                {eventsList.map(event => (
                    <div className="event-container" key={event.id}>
                        <NavLink to={`/event/${event.id}`} className="home-links">
                            {event.name}
                        </NavLink>
                        <span>{convertDate(event.date)}</span>
                        <i className="fas fa-user-tie" >{" " + event.User?.username}</i>
                    </div>
                ))}
            </div>
        </div>
    )
}
