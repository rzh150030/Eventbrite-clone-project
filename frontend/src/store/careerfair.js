import { csrfFetch } from './csrf';

const CREATE_EVENT = "careerfair/createFair";
const UPDATE_FORM = "careerfair/updateFair";
const LOAD_EVENT = "careerfair/loadOneFair";
const DELETE_EVENT = "careerfair/deleteFair";
const GRAB_VENUES = "careerfair/grabvenue";
const LOAD_ALL_EVENT = "careerfair/loadFairs"

const makeEvent = (event) => ({
    type: CREATE_EVENT,
    event
});

const deleteEvent = (event) => ({
    type: DELETE_EVENT
});

const grabVenues = (venue) => ({
    type: GRAB_VENUES,
    venue
});

const getAllEvents = (events) => ({
    type: LOAD_ALL_EVENT,
    events
});

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
// export const updateEventFair = () => async dispatch => {

// };

//thunk for getting all event fairs in database
export const getEvents = () => async dispatch => {
    const response = await csrfFetch("/api/careerFair/allEvent");

    if (response.ok) {
        const data = await response.json();
        dispatch(getAllEvents(data));
    }
};

const initialState = {venues: {}, event: {}};

const fairReducer = (state = initialState, action) => {
    switch(action.type){
        case CREATE_EVENT:
            let newEventState = {...state};
            newEventState.event[action.event.id] = action.event;
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
        default:
            return state;
    }
};

export default fairReducer;
