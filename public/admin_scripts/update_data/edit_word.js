'use strict';

import {getDataAPI} from '../../admin.js';
import {checkFields} from './check_fields.js';
import {removeModal} from '../show_modal.js';
import {showAlert} from '../show_alert.js';

// Edit a word
function editWord(wordId, category) {
    checkFields();
    const input = document.querySelectorAll('.modal input');
    // const errorMessage = document.querySelectorAll('.error-message');

    if (checkFields()) {
        const data = {
            id: wordId,
            english: input[0].value.toLowerCase().trim(),
            transcription: input[1].value.toLowerCase().trim(),
            russian: input[2].value.toLowerCase().trim(),
            image: 'moose.png',
            category: category,
        }
        sendData(data);
    }

    async function sendData(data) {
        const req = await fetch('/edit-word', {
            method: 'PUT',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(data)
        });
        const res = await req.json();

        document.querySelector('.table-main tbody').innerHTML = ``;
        getDataAPI();
        showAlert('Word was edited');
        removeModal();
    }
}

export {editWord};