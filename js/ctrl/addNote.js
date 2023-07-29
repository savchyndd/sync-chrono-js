import { notes } from '../../db/notes.js';

export default function addNote(newNote) {
    const dateNow = new Date();
    const created = dateNow.toLocaleDateString('en-US', {
        month: 'short',
        day: 'numeric',
        year: 'numeric',
    });
    console.log(newNote);
    notes.push({ id: Date.now().toString(), created, ...newNote });
}
