'use strict';

// Create table + pagination
function createMainTable(words) {
    const table = document.querySelector('.table-main tbody');
    const paginationBtn = document.querySelector('.load-word>button');
 
    // Load default table
    const numberRows = 10;
    let start; 
    let numberWords;

    if (words.length <= numberRows) {
        numberWords = words.length;
        paginationBtn.style.display = 'none';
    } else {
        numberWords = numberRows;
        paginationBtn.style.display = 'flex';
    }
    fillTable(0);

    function fillTable(start) {
        for (let i = start; i < numberWords; i++) {
            table.innerHTML += `
                <tr>
                    <td>${words[i].id}</td>
                    <td>${words[i].english}</td>
                    <td>${words[i].transcription}</td>
                    <td>${words[i].russian}</td>
                    <td class="td-image"><span class="material-icons">visibility</span>Show</td>
                    <td>${words[i].category}</td>
                    <td>
                        <ul class="action-list">
                            <li><span class="material-icons">edit</span>Edit</li>
                            <li><span class="material-icons">delete</span>Remove</li>
                        </ul>
                    </td>
                </tr>`;
        }
        loadMoreWords();
    }

    function loadMoreWords() {
        paginationBtn.onclick = (e) => {
            if ((numberWords + numberRows) < words.length) {
                numberWords += numberRows;
                fillTable(numberWords - numberRows);
            } else {
                let lastStart = numberWords;
                numberWords = words.length;
                fillTable(lastStart);
                e.target.style.display = 'none';
            }
        };
    }
}

export {createMainTable};