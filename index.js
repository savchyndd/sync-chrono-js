import './js/modal.js';

import { notes } from './db/notes.js';
import {
    updNotesList,
    addNote,
    removeNote,
    arhiveNote,
    unarhiveNote,
    editNote,
    getNoteById,
} from './js/ctrl/index.js';
import { closeModal, openEditModal } from './js/modal.js';

const refs = {
    tableNote: document.querySelector('.table-note'),
    tableNoteArhived: document.querySelector('.table-arhived'),
    form: document.querySelector('.form-create-note'),
    formEdit: document.querySelector('.form-edit-note'),
    btnCreateNote: document.querySelector('.btn-create-note'),
};

updNotesList();
refs.tableNote.addEventListener('click', onClickBtn);
refs.tableNoteArhived.addEventListener('click', onClickBtn);
refs.form.addEventListener('submit', onAddSubmit);
refs.formEdit.addEventListener('submit', onEditSubmit);
refs.formEdit.addEventListener('submit', onEditSubmit);

function onAddSubmit(e) {
    e.preventDefault();

    const { name, category, content, date } = e.target;

    // if (!name.value) return alert('Please write Name fields');
    // if (!content.value) return alert('Please write Content fields');

    const newNote = {
        name: name.value,
        date: date.value,
        category: category.value,
        content: content.value,
        arhived: false,
    };

    addNote(newNote);
    closeModal();
    updNotesList(notes);
    console.log('New note added');
}

function onEditSubmit(e) {
    e.preventDefault();

    const { name, category, content, date } = e.target;
    const key = e.target.attributes.key;
    // if (!name.value) return alert('Please write Name fields');
    // if (!content.value) return alert('Please write Content fields');

    const newNote = {
        name: name.value,
        date: date.value,
        category: category.value,
        content: content.value,
    };

    editNote(key, newNote);
    closeModal();
    updNotesList(notes);
    console.log('Note edit');
}

function onClickBtn(e) {
    const targetName = e.target.name;
    const noteBtn = ['edit', 'arhive', 'unarhive', 'delete'];
    if (!noteBtn.includes(targetName)) return;
    const key = e.target.attributes.key.value;

    if (targetName === 'edit') {
        openEditModal();
        getNoteById(key);
        refs.formEdit.attributes.key = key;
    }
    if (targetName === 'arhive') {
        arhiveNote(key);
        updNotesList(notes);
        console.log('Note arhived');
    }
    if (targetName === 'unarhive') {
        unarhiveNote(key);
        updNotesList(notes);
        console.log('Note unarhived');
    }
    if (targetName === 'delete') {
        removeNote(key);
        updNotesList(notes);
        console.log('Note deleted');
    }
}
