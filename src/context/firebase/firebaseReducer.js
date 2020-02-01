import {T} from '../actionTypes'
import {SHOW_LOADER, ADD_NOTE, FETCH_NOTES
} from '../actionTypes'

let handlers = { 
    [SHOW_LOADER] : (state) => ({...state, loading: true}),
    [ADD_NOTE] : (state, {payload}) => ({
        ...state, 
        notes: [...state.notes, payload]
    }),
    [FETCH_NOTES] : (state, {payload}) => ({...state, notes: payload, loading: false}),
    DEFAULT: state => state
}

export const firebaseReducer = (state, action) => {
    const handle = handlers[action.type]  || handlers.DEFAULT;
    return handle(state, action);
}