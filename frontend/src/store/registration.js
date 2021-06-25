import { csrfFetch } from './csrf';

const REGISTER_EVENT = "registerFair/registerEvent";
const LOAD_REGISTERS = "registerFair/registeredEvents";
const UNREGISTER_EVENT = "registerFair/UnregisterEvent";

const registerEvent = (registration) => ({
    type: REGISTER_EVENT,
    registration
});

//thunk for registering to event

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
