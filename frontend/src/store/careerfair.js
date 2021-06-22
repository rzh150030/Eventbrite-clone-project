import { csrfFetch } from './csrf';

const CREATE_FORM = "careerfair/createFair";
const UPDATE_FORM = "careerfair/updateFair";
const LOAD_EVENT = "careerfair/readFair";
const DELETE_EVENT = "careerfair/deleteFair";

const loadEvent = (event) => ({
    type: LOAD_EVENT,
    event
});

const deleteEvent = (event) => ({
    type: DELETE_EVENT
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
        dispatch(loadEvent(data.event));
        return response;
    }
    //thunk works, make sure that the data is being put in correctly from component
};

export const getVenues = () => async dispatch => { //get all venues for options
    const response = await csrfFetch("/api/careerFair/venues");

    if (response.ok) {
        const data = await response.json();
        return data;
    }
}

const initialState = { event: null };

const fairReducer = (state = initialState, action) => {
    switch(action.type){
        case LOAD_EVENT:
            return {...state, event: action.event}
        default:
            return state;
    }
};

export default fairReducer;
