import { notes } from '../../db/notes.js';

export default function removeNote(noteId) {
    const noteIdx = notes.findIndex(({ id }) => id === noteId);
    if (noteIdx > -1) {
        notes.splice(noteIdx, 1);
    }
}
