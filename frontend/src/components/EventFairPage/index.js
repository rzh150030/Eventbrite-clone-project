import React, { useEffect, useState } from "react";
import {useParams} from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { getEvent } from "../../store/careerfair";

export default function EventFairPage() {
    //must grab event from database and display contents
    const {id} = useParams();
    const dispatch = useDispatch();
    const currentEvent = useSelector(state => state.careerFair.currentEvent);
    const [event, setEvent] = useState("");

    useEffect(() => {
        dispatch(getEvent(id));
    }, [dispatch]);
    console.log(currentEvent);

    return (
        <div>
            <h1>Name</h1>
        </div>
    )
}
