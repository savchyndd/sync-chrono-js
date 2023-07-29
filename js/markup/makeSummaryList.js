const makeSummaryList = notesList => {
    const uniqueCategory = [...new Set(notesList.map(note => note.category))];

    return uniqueCategory
        .map(item => {
            let totalArhived = 0;
            let totalActive = 0;

            notesList.map(({ category, arhived }) => {
                if (category === item) {
                    if (arhived) {
                        totalArhived += 1;
                    } else {
                        totalActive += 1;
                    }
                }
            });

            return `<tr class="table-row">
                <td>${item}</td>
                <td>${totalActive}</td>
                <td>${totalArhived}</td>
            </tr>`;
        })
        .join('');
};

export default makeSummaryList;
