import splashImage from "../../images/cascade-job-fair-1.jpg";


export default function SplashPage() {
    return (
        <div className="splash-page">
            <div className="splash-page-image-layer">
                <img id="splash-image" src={splashImage} alt="job fair"/>
                <div id="splash-message-container">
                    <p>Go get a job!</p>
                </div>
            </div>
            <button>Find a job fair</button>
        </div>
    );
}
