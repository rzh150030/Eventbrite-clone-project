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
