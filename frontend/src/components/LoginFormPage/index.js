import React, { useState } from 'react';
import { login } from "../../store/session";
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from "react-router-dom";

const LoginFormPage = () => {
    const dispatch = useDispatch();
    const sessionUser = useSelector(state => state.session.user);
    const history = useHistory();
    const [credential, setCredential] = useState("");
    const [password, setPassword] = useState("");
    const [errors, setErrors] = useState([]);

    if (sessionUser) history.push("/"); //redirect user if there is a session user in store

    const onSubmit = (e) => {
        e.preventDefault();
        setErrors([]);

        return dispatch(login({ credential, password })) //dispatch thunk, catch and handle errors from login
        .catch(async (res) => {
        const data = await res.json();
        if (data && data.errors) setErrors(data.errors);
      });
    }

    return (
        <form onSubmit={onSubmit}>
          <ul>
            {errors.map((error, idx) => <li key={idx}>{error}</li>)}
          </ul>
          <label>
            Username or Email
            <input
              type="text"
              value={credential}
              onChange={(e) => setCredential(e.target.value)}
              required
            />
          </label>
          <label>
            Password
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </label>
          <button type="submit">Log In</button>
        </form>
      );
}

export default LoginFormPage;
