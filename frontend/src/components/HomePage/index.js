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

    return (
        <div>
            <div>
                <span className="Welcome-message">Welcome to IT Fairs for Hires</span>
            </div>
            <div className="home-content-container">
                {eventsList.map(event => (
                    <NavLink to={`/event/${event.id}`} key={event.id} className="home-items">
                        {event.name}
                    </NavLink>
                ))}
            </div>
        </div>
    )
}
