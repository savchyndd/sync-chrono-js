import { notes } from '../../db/notes.js';

const form = document.querySelector('.form-edit-note');

export default function editNote(noteId, newNote) {
    const noteIdx = notes.findIndex(({ id }) => id === noteId);
    const newDate = new Date(newNote.date).toLocaleDateString('en-US', {
        month: 'numeric',
        day: 'numeric',
        year: 'numeric',
    });

    let allDate = '';

    if (newDate !== notes[noteIdx].date && newDate !== 'Invalid Date') {
        allDate = notes[noteIdx].date
            ? `${notes[noteIdx].date}, ${newDate}`
            : newDate;
    }

    notes[noteIdx] = { ...notes[noteIdx], ...newNote, date: allDate };
}
