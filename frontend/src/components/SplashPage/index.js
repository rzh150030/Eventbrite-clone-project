import { useSelector } from "react-redux";
import { NavLink, useHistory } from 'react-router-dom';
import splashImage from "../../images/cascade-job-fair-1.jpg";
import "./SplashPage.css";

export default function SplashPage() {
    const recentEvents = useSelector(state => state.careerFair.splashEvents);
    const sessionUser = useSelector(state => state.session.user)
    const history = useHistory();

    const convertDate = (date) => {
        let time = Date.parse(date);
        let formatDate = new Date(time);
        return formatDate.toString();
    };

    const loginUser = () => {
        if (sessionUser) {
            history.push("/upcomingEvents");
        }
        else {
            history.push("/login");
        }
    };

    return (
        <div className="splash-page">
            <div className="splash-page-image-layer">
                <img id="splash-image" src={splashImage} alt="job fair"/>
                <div id="splash-message-container">
                    <p id="splash-text">Find your future employers</p>
                </div>
                <button id="start-button" onClick={loginUser}>Get started</button>
            </div>
            <span id="recent-events-title">Most recent events added</span>
            <div className="splash-recent-events">
                {recentEvents.map(event => (
                    <div key={event.id} className="event-container">
                        <NavLink to={`/event/${event.id}`} className="home-links">
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
