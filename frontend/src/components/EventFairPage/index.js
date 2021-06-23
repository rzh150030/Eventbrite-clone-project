import React, { useEffect, useState } from "react";
import {useParams} from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { getEvent } from "../../store/careerfair";

export default function EventFairPage() {
    //must grab event from database and display contents
    const {id} = useParams();
    const dispatch = useDispatch();
    const currentEvent = useSelector(state => state.careerFair.currentEvent);
    let date;

    useEffect(() => {
        dispatch(getEvent(id));
    }, [dispatch]);

    const convertDate = () => {
        let time = Date.parse(currentEvent.date);
        date = new Date(time);
        return date.toString();
    }

    return (
        <div>
            <article>
                <h1>{currentEvent?.name}</h1>
                <p>Hosted by: {currentEvent && currentEvent.User.username}</p>
                <p>Date: {convertDate()}</p>
                <p>Capacity: {currentEvent?.capacity} people</p>
            </article>
        </div>
    )
}
