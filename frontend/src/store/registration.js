import { csrfFetch } from './csrf';

const REGISTER_EVENT = "registerFair/registerEvent";
const LOAD_REGISTERS = "registerFair/registeredEvents";
const UNREGISTER_EVENT = "registerFair/UnregisterEvent";

const makeRegister = (registration) => ({
    type: REGISTER_EVENT,
    registration
});

const removeRegister = (deleteId) => ({
    type: UNREGISTER_EVENT,
    deleteId //allows for finding which registration to delete from state
});

const getAllRegister = (userRegisters) => ({
    type: LOAD_REGISTERS,
    userRegisters
});

//thunk for registering to event
export const registerEvent = (event) => async dispatch => {
    const {career_fair_id, user_id} = event;

    const response = await csrfFetch("/api/registration/register", {
        method: "POST",
        body:JSON.stringify({carrer_fair_id, user_id})
    });

    if (response.ok) {
        const data = await response.json();
        dispatch(makeRegister(data));
        return data;
    }
};

//thunk for getting user's registered events

//thunk for unregistering from event

const initialState = {registrations: {}};

const registerReducer = (state = initialState, action) => {
    switch (action.type) {
        default:
            return state;
    }
}

export default registerReducer;
