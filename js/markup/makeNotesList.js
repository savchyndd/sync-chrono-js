const makeNotesList = notesList => {
    return notesList
        .map(({ id, name, created, category, content, date = '', arhived }) => {
            if (arhived) return;

            return `<tr class="table-row">
                <td>${name}</td>
                <td>${created}</td>
                <td>${category}</td>
                <td>${content}</td>
                <td>${date}</td>
                <td>
                  <button 
                  key='${id}'
                  name='edit'
                  class="btn-note btn-edit-note" type="button">
                    Edit
                  </button>
                </td>
                <td>
                  <button 
                 key='${id}'
                 name='arhive'
                  class="btn-note btn-arhive-note" 
                    type="button"
                    >
                    Arhive
                  </button>
                </td>
                <td>
                  <button  key='${id}' name='delete' class="btn-note btn-delete-note" type="button">
                    Delete
                  </button>
                </td>
              </tr>`;
        })
        .join('');
};

export default makeNotesList;
