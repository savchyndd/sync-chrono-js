const refs = {
    btnCreateNote: document.querySelector('.btn-create-note'),
    btnEditNote: document.querySelector('.btn-edit-note'),
    modalOverlay: document.querySelector('.overlay'),
    editModalOverlay: document.querySelector('.edit-modal-overlay'),
    body: document.querySelector('body'),
};

refs.btnCreateNote.addEventListener('click', onOpenModal);

export function openEditModal() {
    refs.editModalOverlay.classList.remove('is-hidden');
    refs.body.classList.add('modal-open');

    window.addEventListener('click', onCloseModal);
    window.addEventListener('keydown', onEscCloseModal);
}

function onOpenModal(e) {
    refs.modalOverlay.classList.remove('is-hidden');
    refs.body.classList.add('modal-open');

    window.addEventListener('click', onCloseModal);
    window.addEventListener('keydown', onEscCloseModal);
}

function onCloseModal(e) {
    if (e.target === refs.modalOverlay || e.target === refs.editModalOverlay) {
        refs.modalOverlay.classList.add('is-hidden');
        refs.editModalOverlay.classList.add('is-hidden');
        refs.body.classList.remove('modal-open');

        window.removeEventListener('click', onCloseModal);
        window.removeEventListener('keydown', onEscCloseModal);
    }
}

function onEscCloseModal(e) {
    if (e.code === 'Escape') {
        refs.modalOverlay.classList.add('is-hidden');
        refs.editModalOverlay.classList.add('is-hidden');
        refs.body.classList.remove('modal-open');

        window.removeEventListener('click', onCloseModal);
        window.removeEventListener('keydown', onEscCloseModal);
    }
}

export function closeModal() {
    refs.modalOverlay.classList.add('is-hidden');
    refs.editModalOverlay.classList.add('is-hidden');
    refs.body.classList.remove('modal-open');

    window.removeEventListener('click', onCloseModal);
    window.removeEventListener('keydown', onEscCloseModal);
}
