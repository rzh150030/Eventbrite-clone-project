import React, { useState } from 'react';
import { login } from "../../store/session";
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from "react-router-dom";
import './LoginForm.css';

const LoginFormPage = () => {
    const dispatch = useDispatch();
    const sessionUser = useSelector(state => state.session.user);
    const [credential, setCredential] = useState("");
    const [password, setPassword] = useState("");
    const [errors, setErrors] = useState([]);

    if (sessionUser) return <Redirect to="/"/> //redirect user if already logged in

    const onSubmit = async (e) => {
        e.preventDefault();
        setErrors([]);

        return dispatch(login({ credential, password }))
        .catch(async (res) => {
            const data = await res.json();
            if (data && data.errors) setErrors(data.errors);
      });
    }

    const demoLogin = async (e) => {
        e.preventDefault();
        setErrors([]);

        return dispatch(login({ credential: "Demo-lition", password: "password" }))
        .catch(async (res) => {
            const data = await res.json();
            if (data && data.errors) setErrors(data.errors);
      });
    }

    return (
        <form onSubmit={onSubmit} className="login-form">
            <ul className="errors">
                {errors.map((error, idx) => <li key={idx}>{error}</li>)}
            </ul>
            <label className="labels">
                Username or Email
            </label>
            <input
                type="text"
                value={credential}
                onChange={(e) => setCredential(e.target.value)}
                className="input"
                required
            />
            <label className="labels">
                Password
            </label>
            <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="input"
                required
            />
            <button type="submit" className="submit-login">Log In</button>
            <button type="submit" className="submit-login" onClick={demoLogin}>Demo User</button>
        </form>
      );
}

export default LoginFormPage;
