import React, {useState, useEffect} from 'react';
import { postEventFair, getVenues } from '../../store/careerfair';
import DatePicker from "react-datepicker";
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from "react-router-dom";
import "react-datepicker/dist/react-datepicker.css"
import "./CreateFairPage.css";

export default function CreateFairPage() {
    let history = useHistory();
    const dispatch = useDispatch();
    const sessionUser = useSelector(state => state.session.user);
    const venueList = useSelector(state => Object.values(state.careerFair));
    const [venue_id, setVenueId] = useState("");
    const [name, setName] = useState("");
    const [date, setDate] = useState(new Date());
    const [capacity, setCapacity] = useState("");

    if (!sessionUser) { //Only logged in users can access this page
        history.push("/login")
    }

    //onChange event handlers
    const addName = (e) => setName(e.target.value);
    const addVenue = (e) => setVenueId(e.target.value);
    const addCapacity = (e) => setCapacity(e.target.value);

    //Grab venues from database
    useEffect(() => { //things that need to happen after the page has rendered
        dispatch(getVenues());
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();

        const event = {
            host_id: sessionUser.id,
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
            <form onSubmit={handleSubmit} className="create-fair-form">
                <input type="text" placeholder="Event Name" value={name} onChange={addName} required />
                 <DatePicker selected={date} onChange={(date) => setDate(date)} showTimeSelect dateFormat="MMMM d, yyyy h:mm aa" timeIntervals={1}/>
                <input type="text" placeholder="Capacity" value={capacity} onChange={addCapacity} required />
                <select>
                    {venueList?.map(venue => {
                        return <option key={venue.id}>{venue.name}</option>
                    })}
                </select>
                <button type="submit">Submit Career Fair</button>
            </form>
        </div>
    )

}
