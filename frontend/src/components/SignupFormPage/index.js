import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { signup } from "../../store/session";
import { Redirect } from "react-router-dom";
import './SignupForm.css';

const SignupFormPage = () => {
    const dispatch = useDispatch();
    const sessionUser = useSelector((state) => state.session.user);
    const [email, setEmail] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [errors, setErrors] = useState([]);

    if (sessionUser) return <Redirect to="/"/> //user already logged in, redirect to "/"

    const handleSubmit = (e) => {
        e.preventDefault();
        if (password === confirmPassword) {
          setErrors([]);
          return dispatch(signup({ email, username, password }))
            .catch(async (res) => {
              const data = await res.json();
              if (data && data.errors) setErrors(data.errors);
            });
        }
        return setErrors(['Confirm Password field must be the same as the Password field']);
    };

    return (
        <form onSubmit={handleSubmit} className="signup-form">
          <ul>
            {errors.map((error, idx) => <li key={idx}>{error}</li>)}
          </ul>
          <label className="labels">
            Email
          </label>
          <input
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          <label className="labels">
            Username
          </label>
          <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          <label className="labels">
            Password
          </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          <label className="labels">
            Confirm Password
          </label>
            <input
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
          <button type="submit" className="submit-button">Sign Up</button>
        </form>
    );
}

export default SignupFormPage;
