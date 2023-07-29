import "./js/modal.js";
import "./js/handleSubmit.js";
import { notes } from "./db/notes.js";
import {makeNotesList, updNotesList, addNote, removeNote, editNote}

const refs = {
  tableNote: document.querySelector(".table-note"),
};

updNotesList();

refs.tableNote.addEventListener("click", onDeleteNote);

function onDeleteNote(e) {
  const key = e.target.attributes.key.value;

  removeNote(notes, key);
  updNotesList();
}
