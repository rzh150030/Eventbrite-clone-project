import React, {useEffect} from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { getVenues } from '../../store/careerfair';
import { useDispatch } from 'react-redux';

export default function HomePage() {
    const dispatch = useDispatch();
    const eventsList = useSelector(state => Object.values(state.careerFair.event));

    useEffect(() => {
        dispatch(getVenues());
    }, [dispatch]);

    return (
        <div>
            {eventsList.map(event => (
                <NavLink to={`/event/${event.id}`} key={event.id}>
                    {event.name}
                </NavLink>
            ))}
        </div>
    )
}
