const LOAD_NOTES = 'LOAD_NOTES';

export function loadNotes(notes) {
    return { type: 'LOAD_NOTES', notes };
}