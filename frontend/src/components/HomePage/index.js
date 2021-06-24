import React, {useEffect} from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { getVenues } from '../../store/careerfair';
import { useDispatch } from 'react-redux';
import "./HomePage.css";

export default function HomePage() {
    const dispatch = useDispatch();
    const eventsList = useSelector(state => Object.values(state.careerFair.event));

    useEffect(() => {
        dispatch(getVenues());
    }, [dispatch]);

    const convertDate = (date) => {
        let time = Date.parse(date);
        let formatDate = new Date(time);
        return formatDate.toString();
    }

    return (
        <div className="Home-page">
            <div className="welcome-message-container">
                <span className="Welcome-message">Welcome to IT Fairs for Hires</span>
            </div>
            <div className="home-content-container">
                {eventsList.map(event => (
                    <div className="event-container" key={event.id}>
                        <NavLink to={`/event/${event.id}`} className="home-links">
                            {event.name}
                        </NavLink>
                        <span>{convertDate(event.date)}</span>
                        <i className="fas fa-user-tie" >{" " + event.User.username}</i>
                    </div>
                ))}
            </div>
        </div>
    )
}
