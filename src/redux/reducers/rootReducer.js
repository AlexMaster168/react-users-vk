import {ADD_USER, LOAD_USER, REMOVE_USER} from "../actionType";

const initialState = {
    users: []
}


const handlers = {
    [LOAD_USER]: (state, {user}) => ({
        ...state,
        user
    }),
    [ADD_USER]: (state, {payload}) => ({
        ...state,
        users: [{ payload }, ...state.users]
    }),
    [REMOVE_USER]: (state, {id}) => ({
        ...state,
       users: state.users.filter(user => user.id !== id)
    }),
    DEFAULT: state => state
}


export const rootReducer = (state = initialState, action) => {
    const handler = handlers[action.type] || handlers.DEFAULT
    return handler(state, action.payload)
}
