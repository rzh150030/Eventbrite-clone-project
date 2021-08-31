import { useSelector } from "react-redux";
import { NavLink } from 'react-router-dom';
import splashImage from "../../images/cascade-job-fair-1.jpg";
import "./SplashPage.css";

export default function SplashPage() {
    const recentEvents = useSelector(state => state.careerFair.splashEvents);

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
                    <p id="splash-text">Find your future employers</p>
                </div>
                <button id="start-button">Get started</button>
            </div>
            <span>Most recent events added</span>
            <div className="splash-recent-events">
                {recentEvents.map(event => (
                    <div key={event.id}>
                        <NavLink to={`/event/${event.id}`}>
                            {event.name}
                        </NavLink>
                        <span>{convertDate(event.date)}</span>
                        <i className="fas fa-user-tie" >{" " + event.User?.username}</i>
                    </div>
                ))}
            </div>
        </div>
    );
}
