import * as notesAction from '../actions/noteActions';
import initialState from './initialState';

export default function notesReducer(state = initialState, action) {
    switch (action.type) {
        case notesAction.LOAD_NOTES:
            state.notes = [{ title: 'Redux', desc: 'Lorem' }];
            return state;
        default:
            return state;
    }
}