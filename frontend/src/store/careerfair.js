import { csrfFetch } from './csrf';

const CREATE_EVENT = "careerfair/createFair";
const UPDATE_EVENT = "careerfair/updateFair";
const LOAD_EVENT = "careerfair/loadOneFair";
const DELETE_EVENT = "careerfair/deleteFair";
const GRAB_VENUES = "careerfair/grabvenue";
const LOAD_ALL_EVENT = "careerfair/loadFairs";
const USER_EVENTS = "careerfair/hostFairs";

const makeEvent = (event) => ({
    type: CREATE_EVENT,
    event
});

const destroyEvent = (deleteId) => ({
    type: DELETE_EVENT,
    deleteId
});

const grabVenues = (venue) => ({
    type: GRAB_VENUES,
    venue
});

const getAllEvents = (events) => ({
    type: LOAD_ALL_EVENT,
    events
});

const getCurrentEvent = (event) => ({
    type: LOAD_EVENT,
    event
});

const editEvent = (event) => ({
    type: UPDATE_EVENT,
    event
});

const getUserEvents = (userHost) => ({
    type: USER_EVENTS,
    userHost
})

//thunk for creating a new event fair
export const postEventFair = (event) => async dispatch => { //Test thunk with window.store.dispatch(window.careerFairActions.postEventFair({host_id: 1, venue_id: 1, name: "west meets", date: "october 22 2021, 3:00 PM", capacity: 5}))
    const {host_id, venue_id, name, date, capacity} = event;
    const response = await csrfFetch("/api/careerFair/createEvent", {
        method: "POST",
        body: JSON.stringify({host_id, venue_id, name, date, capacity})
    });

    if (response.ok) {
        const data = await response.json();
        dispatch(makeEvent(data));
        return data;
    }
};

export const getVenues = () => async dispatch => { //get all venues for options
    const response = await csrfFetch("/api/careerFair/venues");

    if (response.ok) {
        const data = await response.json();
        dispatch(grabVenues(data));
    }
};

//thunk for updating an existing event fair
export const updateEventFair = (updateEvent, eventId) => async dispatch => {
    const {venue_id, name, date, capacity} = updateEvent;
    const response = await csrfFetch(`/api/careerFair/${eventId}/updateEvent`, {
        method: "PUT",
        body: JSON.stringify({venue_id, name, date, capacity})
    });

    if (response.ok) {
        const data = await response.json();
        dispatch(editEvent(data));
        return data;
    }
};

//thunk for getting all event fairs in database
export const getEvents = () => async dispatch => {
    const response = await csrfFetch("/api/careerFair/allEvent");

    if (response.ok) {
        const data = await response.json();
        dispatch(getAllEvents(data));
    }
};

//thunk for getting a single event
export const getEvent = (eventId) => async dispatch => {
    const response = await csrfFetch(`/api/careerFair/${eventId}`);

    if (response.ok) {
        const data = await response.json();
        dispatch(getCurrentEvent(data));
    }
};

//thunk for deleting an event
export const deleteEvent = (eventId) => async dispatch => {
    const response = await csrfFetch(`/api/careerFair/${eventId}/deleteEvent`, {
        method: "DELETE"
    });

    if (response.ok) { //delete an event in event state and currentEvent
        const data = await response.json();
        dispatch(destroyEvent(eventId));
        return data;
    }
};

//thunk for getting user's events
export const hostEvents = (userId) => async dispatch => {
    const response = await csrfFetch(`/api/careerFair/${userId}/hostEvent`);

    if (response.ok) {
        const data = await response.json();
        dispatch(getUserEvents(data));
    }
};

const initialState = {venues: {}, event: {}, currentEvent: {}, userEvents: {}};

const fairReducer = (state = initialState, action) => {
    switch(action.type){
        case CREATE_EVENT:
            let newEventState = {...state};
            newEventState.event[action.event.id] = action.event;
            // newEventState.userEvents[action.event.id] = action.event;
            return newEventState;
        case GRAB_VENUES:
            let newState = {...state};
            action.venue.forEach((venue) => {
                newState.venues[venue.id] = venue
            });
            return newState;
        case LOAD_ALL_EVENT:
            let allEventState = {...state};
            action.events.forEach((event) => {
                allEventState.event[event.id] = event
            });
            return allEventState;
        case LOAD_EVENT:
            return {...state, currentEvent: action.event};
        case UPDATE_EVENT:
            let updateEventState = {...state};
            updateEventState.event[action.event.id] = action.event;
            updateEventState.currentEvent = action.event;
            return updateEventState;
        case DELETE_EVENT:
            let deleteEventState = {...state};
            delete deleteEventState.event[action.deleteId];
            delete deleteEventState.userEvents[action.deleteId];
            deleteEventState.currentEvent = {};
            return deleteEventState;
        case USER_EVENTS:
            let hostEventState = {...state};
            action.userHost.Career_fairs.forEach((event) => { //grabs user's events
                hostEventState.userEvents[event.id] = event;
            });
            return hostEventState;
        default:
            return state;
    }
};

export default fairReducer;
