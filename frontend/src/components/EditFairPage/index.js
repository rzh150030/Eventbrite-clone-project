import React, {useState} from "react";
import {useParams} from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { updateEventFair } from "../../store/careerfair";
import { useHistory } from "react-router-dom";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./EditFairPage.css";

export default function EditFairPage() {
    const {id} = useParams();
    let history = useHistory();
    const dispatch = useDispatch();
    const sessionUser = useSelector(state => state.session.user);
    const venueList = useSelector(state => Object.values(state.careerFair.venues));
    const [venue, setVenue] = useState("The Xfinity Center");
    const [name, setName] = useState("");
    const [date, setDate] = useState(new Date());
    const [capacity, setCapacity] = useState("");
    const [errors, setErrors] = useState([]);

    if (!sessionUser) { //Only logged in users can access this page
        history.push("/login")
    }

    //onChange event handlers
    const changeName = (e) => setName(e.target.value);
    const changeVenue = (e) => setVenue(e.target.value);
    const changeCapacity = (e) => setCapacity(e.target.value);

    const handleSubmit = async (e) => {
        e.preventDefault();

        let venueIds = {};
        venueList.forEach(venue => { //Normalize venue ids
            venueIds[venue.name] = venue.id;
        });

        const event = {
            venue_id: venueIds[venue],
            name,
            date,
            capacity
        };

        setErrors([]);
        try {
            let newEvent = await dispatch(updateEventFair(event, id));

            if (newEvent) history.push(`/event/${id}`);
        } catch (error) {
            const data = await error.json();

            if (data && data.errors) setErrors(data.errors);
        }
    }

    return (
        <div>
            <form onSubmit={handleSubmit} className="edit-fair-form">
                <ul>
                    {errors.map((err, i) => <li key={i}>{err}</li>)}
                </ul>
                <input type="text" placeholder="Event Name" value={name} onChange={changeName} className="edit-entry" required />
                <input type="text" placeholder="Capacity" value={capacity} onChange={changeCapacity} className="edit-entry" required />
                <select value={venue} onChange={changeVenue} className="venue-select">
                    {venueList?.map(venue => {
                        return <option key={venue.id}>{venue.name}</option>
                    })}
                </select>
                <DatePicker selected={date} onChange={(date) => setDate(date)} showTimeSelect dateFormat="MMMM d, yyyy h:mm aa" timeIntervals={1} className="calendar"/>
                <button type="submit" className="submit-edit-fair">Edit Career Fair</button>
            </form>
        </div>
    )
}
