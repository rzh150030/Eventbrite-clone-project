import React, {useState} from 'react';
import { postEventFair } from '../../store/careerfair';
import DatePicker from "react-datepicker";
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from "react-router-dom";
import "react-datepicker/dist/react-datepicker.css"
import "./CreateFairPage.css";

export default function CreateFairPage() {
    let history = useHistory();
    const dispatch = useDispatch();
    const sessionUser = useSelector(state => state.session.user);
    const venueList = useSelector(state => Object.values(state.careerFair.venues));
    const [venue, setVenue] = useState("The Xfinity Center"); //Needs to be hardcoded to avoid undefined venue
    const [name, setName] = useState("");
    const [date, setDate] = useState(new Date());
    const [capacity, setCapacity] = useState("");
    const [errors, setErrors] = useState([]);

    if (!sessionUser) { //Only logged in users can access this page
        history.push("/login")
    }

    //onChange event handlers
    const addName = (e) => setName(e.target.value);
    const addVenue = (e) => setVenue(e.target.value);
    const addCapacity = (e) => setCapacity(e.target.value);

    const handleSubmit = (e) => {
        e.preventDefault();

        let venueIds = {};
        venueList.forEach(venue => { //Normalize venue ids
            venueIds[venue.name] = venue.id;
        });

        const event = {
            host_id: sessionUser.id,
            venue_id: venueIds[venue],
            name,
            date,
            capacity
        }

        setErrors([]);
        dispatch(postEventFair(event))
        .catch(async (res) => {
            const data = await res.json()
            if (data && data.errors) setErrors(data.errors)
        });

        history.push("/");
    }

    return (
     <div>
            <form onSubmit={handleSubmit} className="create-fair-form">
                <ul>
                    {errors.map((err, i) => <li key={i}>{err}</li>)}
                </ul>
                <input type="text" placeholder="Event Name" value={name} onChange={addName} required />
                <DatePicker selected={date} onChange={(date) => setDate(date)} showTimeSelect dateFormat="MMMM d, yyyy h:mm aa" timeIntervals={1}/>
                <input type="text" placeholder="Capacity" value={capacity} onChange={addCapacity} required />
                <select value={venue} onChange={addVenue}>
                    {venueList?.map(venue => {
                        return <option key={venue.id}>{venue.name}</option>
                    })}
                </select>
                <button type="submit">Submit Career Fair</button>
            </form>
        </div>
    )

}
