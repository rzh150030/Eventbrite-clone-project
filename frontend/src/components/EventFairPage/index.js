import React, { useEffect, useState } from "react";
import {useParams, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { getEvent } from "../../store/careerfair";
import "./EventFairPage.css";

export default function EventFairPage() {
    //must grab event from database and display contents
    const {id} = useParams();
    const history = useHistory();
    const dispatch = useDispatch();
    const currentEvent = useSelector(state => state.careerFair.currentEvent);
    const sessionUser = useSelector(state => state.session.user);
    let date;

    useEffect(() => {
        dispatch(getEvent(id));
    }, [dispatch, id]);

    const convertDate = () => {
        let time = Date.parse(currentEvent.date);
        date = new Date(time);
        return date.toString();
    }

    const deleteEvent = () => {

    }

    const editButton = () => {
        let path = `/editfair/${currentEvent.id}`
        history.push(path)
    };

    let editDeleteButtons;
    if (sessionUser && sessionUser.id === currentEvent.host_id) {
        editDeleteButtons = (
            <div>
                <button onClick={editButton} type="submit">Edit</button>
                <button onClick={deleteEvent}>Delete</button>
            </div>
        )
    }


    return (
        <div>
            <article>
                <h1>{currentEvent?.name}</h1>
                <p>Hosted by: {currentEvent?.User?.username}</p>
                <p>Date and Time: {convertDate()}</p>
                <p>Capacity: {currentEvent?.capacity} people</p>
                <p>Location</p>
                <p>
                    {currentEvent?.Venue?.name}<br/>
                    {currentEvent?.Venue?.address}<br/>
                    {currentEvent?.Venue?.city}, {currentEvent?.Venue?.country}, {currentEvent?.Venue?.zipCode}
                </p>
            </article>
            {editDeleteButtons}
        </div>
    )
}
