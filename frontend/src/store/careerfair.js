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
export const postEventFair = (event) => async dispatch => {
    const {name, date, capacity} = event;
    const response = await csrfFetch("/api/careerFair/createEvent", {
        method: "POST",
        body: JSON.stringify({name, date, capacity})
    });

    if (response.ok) {
        const data = await response.json();
        dispatch(loadEvent(data.event));
        return response;
    }
};

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
