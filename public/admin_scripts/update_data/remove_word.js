'use strict';

import {removeModal} from '../show_modal.js';
import {getDataAPI} from '../../admin.js';
import {showAlert} from '../show_alert.js';

// Remove category
async function removeWord(word_id) {
    const req = await fetch(`/remove-word?word_id=${word_id}`, {
        method: 'DELETE',
    });
    const res = await req.json();

    if (res.message === 'word was removed') {
        document.querySelector('.table-main tbody').innerHTML = ``;
        getDataAPI();
        showAlert('Word was removed');
        removeModal();
    }
}

export {removeWord};