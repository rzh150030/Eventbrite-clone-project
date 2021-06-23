import React, {useState, useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getEvents } from '../../store/careerfair';
import { NavLink } from 'react-router-dom';
import EventFairPage from "../EventFairPage";

export default function HomePage() {
    const dispatch = useDispatch();
    const eventsList = useSelector(state => Object.values(state.careerFair.event));

    useEffect(() => {
        dispatch(getEvents());
    }, []);
    console.log(eventsList)

    return (
        <div>
            {eventsList.map(event => (
                <NavLink to={`/event/${event.id}`}>
                    <EventFairPage />
                </NavLink>
            ))}
        </div>
    )
}
