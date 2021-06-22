import React, {useState} from 'react';
import { postEventFair } from '../../store/careerfair';
import Calendar from 'react-calendar';
import DatePicker from "react-datepicker";
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
    const [time, setTime] = useState("9:00 PM");
    const [capacity, setCapacity] = useState("");

    if (!sessionUser) {
        history.push("/login")
    }

    //onChange event handlers
    const addName = (e) => setName(e.target.value);
    const addVenue = (e) => setVenueId(e.target.value);
    const addCapacity = (e) => setCapacity(e.target.value);

    const handleSubmit = async (e) => {
        e.preventDefault();

        //attach time to the date

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
    console.log(date);
    return (
        <div>
            <form>
                <input type="text" placeholder="Event Name" value={name} onChange={addName} required />
                {/* <Calendar value={date} onChange={setDate}/> */}
                <DatePicker selected={date} onSelect={setDate} showTimeSelect dateFormat="MMMM d, yyyy h:mm aa"/>
                {/* <input type="time" value={time} onChange={setTime} required /> */}
                <input type="text" placeholder="Capacity" value={capacity} onChange={addCapacity} required />
            </form>
        </div>
    )
}
