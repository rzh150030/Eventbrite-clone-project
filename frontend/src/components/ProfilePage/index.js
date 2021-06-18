import { useSelector } from 'react-redux';
import { Redirect } from "react-router-dom";

const ProfilePage = () => {
    const sessionUser = useSelector(state => state.session.user);

    if (!sessionUser) return <Redirect to="/"/>;

    return (
        <div>
            <h1>HI</h1>
        </div>
    );
}

export default ProfilePage;
