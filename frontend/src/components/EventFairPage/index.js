import React, { useEffect } from "react";
import {useParams, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { getEvent, deleteEvent } from "../../store/careerfair";
import "./EventFairPage.css";

export default function EventFairPage() {
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

    const deletion = async () => {
        let deleted = await dispatch(deleteEvent(currentEvent.id));

        if (deleted) history.push("/");
    }

    const editButton = () => {
        history.push(`/editfair/${currentEvent.id}`);
    };

    let editDeleteButtons;
    if (sessionUser && sessionUser.id === currentEvent.host_id) {
        editDeleteButtons = (
            <div>
                <button onClick={editButton} type="submit">Edit</button>
                <button onClick={deletion}>Delete</button>
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
