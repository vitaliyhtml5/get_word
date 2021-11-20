'use strict';

function makeMainTable(words) {
    const table = document.querySelector('.table-main');

    for (let i = 0; i < 10; i++) {
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
            </tr>
        `;
    }
}

export {makeMainTable};