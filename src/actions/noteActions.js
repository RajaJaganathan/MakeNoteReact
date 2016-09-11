export const LOAD_NOTES = 'LOAD_NOTES';
export const ADD_NOTE = 'ADD_NOTE';
export const DELETE_NOTE = 'DELETE_NOTE';

export const ORDER_BY_TITLE = 'ORDER_BY_TITLE';
export const FILTER_NOTES_BY_TITLE = 'FILTER_NOTES_BY_TITLE';

import $ from 'jquery';

export const loadNotesSuccess = (notes) => ({ type: LOAD_NOTES, notes });
export const addNote = (note) => ({ type: ADD_NOTE, note });
export const deleteNote = (note) => ({ type: DELETE_NOTE, note });
export const orderByTitle = (dir) => ({ type: ORDER_BY_TITLE, dir });
export const filterNotesByTitle = (title) => ({ type: FILTER_NOTES_BY_TITLE, title });

export function loadNotes() {
    return function(dispatch) {
        return $.ajax('mockdata/notes.json').then(function(res) {
            dispatch(loadNotesSuccess(res));
        });
    }
}