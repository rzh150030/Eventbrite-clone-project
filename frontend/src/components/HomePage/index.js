import React from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';

export default function HomePage() {
    const eventsList = useSelector(state => Object.values(state.careerFair.event));

    return (
        <div>
            {eventsList.map(event => (
                <NavLink to={`/event/${event.id}`}>
                    {event.name}
                </NavLink>
            ))}
        </div>
    )
}
