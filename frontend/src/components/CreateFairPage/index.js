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
    const [name, setName] = useState("");
    const [venue_id, setVenueId] = useState("");
    const [date, setDate] = useState(new Date());

    if (!sessionUser) {
        history.push("/login")
    }
    //sessionUser.id to get current logged in user id
    //onChange event handlers
    const addName = (e) => setName(e.target.value);
    const addVenue = (e) => setVenueId(e.target.value);
    const addDate = (e) => setDate(e.target.value);

    const handleSubmit = (e) => {
        e.preventDefault()
    }

    return (
        <div>
            <form>
                <input type="text" placeholder="Event Name" required>
                </input>
                <Calendar value={date} onChange={setDate}/>
            </form>
        </div>
    )
}
