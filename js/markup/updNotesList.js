import { notes } from '../../db/notes.js';
import makeSummaryList from './makeSummaryList.js';
import makeNotesList from './makeNotesList.js';
import makeArhivedNotesList from './makeArhivedNotesList.js';

const refs = {
    tableNote: document.querySelector('.table-note'),
    tableArhivedNote: document.querySelector('.table-note-arhived'),
    tableSummary: document.querySelector('.table-summary'),
};

export default function updNotesList() {
    refs.tableNote.innerHTML = '';
    refs.tableNote.insertAdjacentHTML('beforeend', makeNotesList(notes));
    refs.tableSummary.innerHTML = '';
    refs.tableSummary.insertAdjacentHTML('beforeend', makeSummaryList(notes));
    refs.tableArhivedNote.innerHTML = '';
    refs.tableArhivedNote.insertAdjacentHTML(
        'beforeend',
        makeArhivedNotesList(notes)
    );
}
