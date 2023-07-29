const btnCreateNote = document.querySelector(".btn-create-note");
const tableNote = document.querySelector(".table-note");
const modalOverlay = document.querySelector(".overlay");
const body = document.querySelector("body");

btnCreateNote.addEventListener("click", onOpenModal);
tableNote.addEventListener("click", onOpenModalEditNote);

function onOpenModalEditNote(e) {
  e.preventDefault();
  const { className } = e.target;

  if (!className.includes("btn-edit-note")) return;

  modalOverlay.classList.remove("is-hidden");
  body.classList.add("modal-open");

  window.addEventListener("click", onCloseModal);
  window.addEventListener("keydown", onEscCloseModal);
}

function onOpenModal(e) {
  e.preventDefault();

  modalOverlay.classList.remove("is-hidden");
  body.classList.add("modal-open");

  window.addEventListener("click", onCloseModal);
  window.addEventListener("keydown", onEscCloseModal);
}

const onCloseModal = (e) => {
  if (e.target === modalOverlay) {
    modalOverlay.classList.add("is-hidden");
    body.classList.remove("modal-open");

    window.removeEventListener("click", onCloseModal);
    window.removeEventListener("keydown", onEscCloseModal);
  }
};

function onEscCloseModal(e) {
  if (e.code === "Escape") {
    modalOverlay.classList.add("is-hidden");
    body.classList.remove("modal-open");

    window.removeEventListener("click", onCloseModal);
    window.removeEventListener("keydown", onEscCloseModal);
  }
}
