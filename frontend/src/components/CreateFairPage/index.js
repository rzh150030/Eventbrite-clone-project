import React from 'react';
import { postEventFair } from '../../store/careerfair';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from "react-router-dom";
import "./CreateFairPage.css";

export default function CreateFairPage() { //should only be accessible to logged in users
    let history = useHistory();
    const sessionUser = useSelector(state => state.session.user);

    if (!sessionUser) {
        history.push("/login")
    }
    else{
        console.log(sessionUser.id)
    }

    const handleSubmit = () => {

    }

    return (
        <div>
            <form>
                <input type="text" placeholder="Event Name" required>
                </input>
            </form>
        </div>
    )
}
