import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { NavLink } from 'react-router-dom';
import splashImage from "../../images/cascade-job-fair-1.jpg";

export default function SplashPage() {
    const eventsList = useSelector(state => Object.values(state.careerFair.event));
    const recentEvents = useSelector(state => state.careerFair.splashEvents);

    // useEffect(() => {   //grab 3 most recent events
    //     for (let i = 0; i < 3; i++) {
    //         recentEvents.push(eventsList[i]);
    //     }
    // }, [eventsList, recentEvents]);

    const convertDate = (date) => {
        let time = Date.parse(date);
        let formatDate = new Date(time);
        return formatDate.toString();
    };

    return (
        <div className="splash-page">
            <div className="splash-page-image-layer">
                <img id="splash-image" src={splashImage} alt="job fair"/>
                <div id="splash-message-container">
                    <p>Go get a job!</p>
                </div>
                <button>Find a job fair</button>
            </div>
            <span>Most recent events</span>
            <div className="splash-recent-events">
                {/* {recentEvents.map(event => (
                    <div key={event.id}>
                        <NavLink to={`/event/${event.id}`}>
                            {event.name}
                        </NavLink>
                        <span>{convertDate(event.date)}</span>
                        <i className="fas fa-user-tie" >{" " + event.User?.username}</i>
                    </div>
                ))} */}
            </div>
        </div>
    );
}
