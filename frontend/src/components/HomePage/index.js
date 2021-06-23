import React, {useState, useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getEvents } from '../../store/careerfair';

export default function HomePage() {
    const dispatch = useDispatch();
    const eventsList = useSelector(state => state.careerFair.event);

    useEffect(() => {
        dispatch(getEvents());
    }, []);
    console.log(eventsList);
    return (
        <div>

        </div>
    )
}
