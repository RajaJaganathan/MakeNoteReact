import * as notesAction from '../actions/noteActions';
import initialState from './initialState';
import _ from 'lodash';

export default function notesReducer(state, action) {
    switch (action.type) {
        case notesAction.LOAD_NOTES:
            state.notes = action.notes;
            return state.notes
        case notesAction.ORDER_BY_TITLE:
            state = _.orderBy(state, 'title', action.dir);
            return state;
        case notesAction.ADD_NOTE:
            state.push(action.note)
            return state;
        case notesAction.DELETE_NOTE:
            _.remove(state, action.note);
            return state;
        case notesAction.FILTER_NOTES_BY_TITLE:
            return _.filter(state, (item, idx) => {
                return item.title.toLowerCase().indexOf(action.title.toLowerCase()) > -1;
            });
        default:
            return state || {};
    }
}