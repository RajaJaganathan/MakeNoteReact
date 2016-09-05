export const LOAD_NOTES = 'LOAD_NOTES';

import $ from 'jquery';

export function loadNotesSuccess(notes) {
    return { type: LOAD_NOTES, notes };
}

export function loadNotes() {
    return function(dispatch) {
        return $.ajax('mockdata/notes.json').then(function(res) {
            dispatch(loadNotesSuccess(res));
        });
    }
}