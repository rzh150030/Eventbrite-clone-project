import React, {useState} from 'react';
import { postEventFair } from '../../store/careerfair';
import Calendar from 'react-calendar';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from "react-router-dom";
import "./CreateFairPage.css";

export default function CreateFairPage() { //should only be accessible to logged in users
    let history = useHistory();
    const dispatch = useDispatch();
    const sessionUser = useSelector(state => state.session.user);
    const [venue_id, setVenueId] = useState("");
    const [name, setName] = useState("");
    const [date, setDate] = useState(new Date());
    const [capacity, setCapacity] = useState(0);

    if (!sessionUser) {
        history.push("/login")
    }

    //onChange event handlers
    const addName = (e) => setName(e.target.value);
    const addVenue = (e) => setVenueId(e.target.value);
    const addDate = (e) => setDate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        const event = {
            host_id: sessionUser.id, //sessionUser.id to get current logged in user id
            venue_id,
            name,
            date,
            capacity
        }

        let newEvent = await dispatch(postEventFair(event))
        if (newEvent) {
            history.push(`/event/${newEvent.id}`);
        }
    }

    return (
        <div>
            <form>
                <input type="text" placeholder="Event Name" required>
                </input>
                <Calendar value={date} onChange={addDate}/>
            </form>
        </div>
    )
}
