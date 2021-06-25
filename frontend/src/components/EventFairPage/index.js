import React, { useEffect, useState } from "react";
import {useParams, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { getEvent, deleteEvent } from "../../store/careerfair";
import { registerEvent, getRegisteredEves } from "../../store/registration";
import "./EventFairPage.css";
import careerFair from "../../images/RMI-career-fair-0618.jpg";

export default function EventFairPage() {
    const {id} = useParams();
    const history = useHistory();
    const dispatch = useDispatch();
    const currentEvent = useSelector(state => state.careerFair.currentEvent);
    const sessionUser = useSelector(state => state.session.user);
    const userRegistrations = useSelector(state => Object.values(state.registerFair.registrations));
    const currentRegistration = userRegistrations.find(element => ((element.user_id === sessionUser.id)
        && (element.career_fair_id === Number(id)))); //see if current event is registered with current user
    let registered = currentRegistration; //behave like a switch for register button
    let date;

    console.log(currentRegistration)
    useEffect(() => { //get event from database to render
        dispatch(getEvent(id));
        dispatch(getRegisteredEves(sessionUser.id)); //get user registration to determine which button to show
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

    const register = async (e) => {
        e.preventDefault();

        const userRegister = {
            career_fair_id: id,
            user_id: sessionUser.id
        };

        registered = await dispatch(registerEvent(userRegister));
    };

    const unregister= async (e) => {
        e.preventDefault();

        //find the registration that matches user_id and career_fair_id


        registered = false;
    };

    let registerButton;
    if (sessionUser && !registered && sessionUser.id !== currentEvent.host_id) {
        registerButton = (
            <div className="register-button">
                <button onClick={register} type="submit">Register</button>
            </div>
        )
    }
    else if (sessionUser && registered && sessionUser.id !== currentEvent.host_id) {
        registerButton = (
            <div className="unregister-button">
                <button onClick={unregister} type="submit">Unregister</button>
            </div>
        )
    }

    return (
        <div className="event-page">
            <article className="event-article">
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
                {editDeleteButtons}
            </article>
            <img src={careerFair} alt=""/>
            {registerButton}
        </div>
    )
}
