import { notes } from '../../db/notes.js';

const form = document.querySelector('.form-edit-note');

export default function getNoteById(noteId) {
    const noteIdx = notes.findIndex(({ id }) => id === noteId);
    form.attributes.key = noteId;
    form.category.value = notes[noteIdx].category;
    form.name.value = notes[noteIdx].name;
    form.content.value = notes[noteIdx].content;
    form.date.value = new Date(notes[noteIdx].date).toLocaleDateString(
        'en-CA',
        {
            year: 'numeric',
            day: 'numeric',
            month: 'numeric',
        }
    );
    form.created.value = new Date(notes[noteIdx].created).toLocaleDateString(
        'en-CA',
        {
            year: 'numeric',
            day: 'numeric',
            month: 'numeric',
        }
    );
}
