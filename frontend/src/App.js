import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { Route, Switch } from 'react-router-dom';
import LoginFormPage from './components/LoginFormPage';
import SignupFormPage from "./components/SignupFormPage";
import Navigation from './components/Navigation';
import ProfilePage from "./components/ProfilePage";
import CreateFairPage from "./components/CreateFairPage";
import HomePage from "./components/HomePage";
import EditFairPage from "./components/EditFairPage";
import EventFairPage from "./components/EventFairPage";
import * as sessionActions from "./store/session";

function App() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);
  const eventsList = useSelector(state => Object.values(state.careerFair.event));
  useEffect(() => {
    dispatch(sessionActions.restoreUser()).then(() => setIsLoaded(true));
  }, [dispatch]);

  return (
    <>
      <Navigation isLoaded={isLoaded}/>

      {isLoaded && (
        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route path="/login">
            <LoginFormPage />
          </Route>
          <Route path="/signup">
            <SignupFormPage />
          </Route>
          <Route path="/profile">
            <ProfilePage />
          </Route>
          <Route path="/createfair">
            <CreateFairPage />
          </Route>
          {eventsList.map(event => (
            <Route path={`/event/:id`} key={event.id}>
              <EventFairPage />
            </Route>
          ))}
          {eventsList.map(event => (
            <Route path="/editfair/:id" key={event.id}>
              <EditFairPage />
            </Route>
          ))}
        </Switch>
      )}
    </>

  );
}

export default App;
