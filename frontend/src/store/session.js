import { csrfFetch } from './csrf';

const SET_USER = 'session/setUser';
const REMOVE_USER = 'session/removeUser';

const setUser = (user) => ({
    type: SET_USER,
    user
});

const removeUser = () => ({
    type: REMOVE_USER
});

export const login = (user) => async (dispatch) => { //thunk for logging in user
    const {credential, password} = user;
    const response = await csrfFetch("/api/session", {
        method: "POST",
        body: JSON.stringify({credential, password})
    });
    const data = await response.json();
    dispatch(setUser(data.user));
    return response;
};

export const restoreUser = () => async dispatch => { //thunk for retaining user session
    const response = await csrfFetch('/api/session');
    const data = await response.json();
    dispatch(setUser(data.user));
    return response;
};

export const signup = (user) => async (dispatch) => { //thunk for signing up
    const { username, email, password } = user;
    const response = await csrfFetch("/api/users", {
      method: "POST",
      body: JSON.stringify({
        username,
        email,
        password,
      })
    });
    const data = await response.json();
    dispatch(setUser(data.user));
    return response;
};

const initialState = { user: null };

const sessionReducer = (state = initialState, action) => {
    switch(action.type){
        case SET_USER:
            return {...state, user: action.user};
        case REMOVE_USER:
            return {...state, user: null};
        default:
            return state;
    }
};

export default sessionReducer;
