import { notes } from '../../db/notes.js';

export default function arhiveNote(noteId) {
    const noteIdx = notes.findIndex(({ id }) => id === noteId);
    notes[noteIdx].arhived = false;
}
