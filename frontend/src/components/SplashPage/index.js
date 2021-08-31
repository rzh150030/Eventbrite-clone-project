import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import splashImage from "../../images/cascade-job-fair-1.jpg";

export default function SplashPage() {
    const eventsList = useSelector(state => Object.values(state.careerFair.event));
    const [recentEvents, setRecentEvents] = useState([]);

    useEffect(() => {   //grab 3 most recent events
        const list = [];
        for (let i = 0; i < 3; i++) {
            list.push(eventsList[i]);
        }
        setRecentEvents(list);
    }, [eventsList, recentEvents]);


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

            </div>
        </div>
    );
}
