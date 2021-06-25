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
        body:JSON.stringify({career_fair_id, user_id})
    });

    if (response.ok) {
        const data = await response.json();
        dispatch(makeRegister(data));
        return data;
    }
};

//thunk for getting user's registered events
export const getRegisteredEves = (userId) => {
    const response = await csrfFetch(`/api/registration/${userId}/registrations`);

    if (response.ok) { //response will contain user with associated registers
        const data = await response.json();
        dispatch(getAllRegister(data));
    }
}

//thunk for unregistering from event

const initialState = {registrations: {}};

const registerReducer = (state = initialState, action) => {
    switch (action.type) {
        case REGISTER_EVENT:
            let newRegisterState = {...state};
            newRegisterState.registrations[action.registration.id] = action.registration;
            return newRegisterState;
        case LOAD_REGISTERS:
            let allRegisterState = {...state};
            action.userRegisters.Registration.forEach(event => {
                allRegisterState.registrations[event.id] = event;
            });
            return allRegisterState;
        default:
            return state;
    }
}

export default registerReducer;
