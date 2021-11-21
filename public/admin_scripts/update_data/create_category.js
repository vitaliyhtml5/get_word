'use sctrict';

import {checkFields, checkUniqueCategory} from './check_fields.js';
import {removeModal} from '../show_modal.js';
import {showErrorInput, clearError} from './show_error.js';
import {getCategoryAPI} from '../../admin.js';

// Create a new category
function createCategory(category) {
    const input = document.querySelector('.modal input');
    const errorMessage = document.querySelector('.error-message');

    if (checkFields() && checkUniqueCategory(category)) {
        const data = {
            category: input.value.toLowerCase().trim()
        }
        sendData(data);
    }
    async function sendData(data) {
        const req = await fetch('/add-category', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(data)
        });
        const res = await req.json();

        if (res.message === 'non-english chars') {
            showErrorInput(input, errorMessage, 'Only English chars can be put');
            clearError(input, errorMessage);
        } else {
            document.querySelector('.table-main tbody').innerHTML = ``;
            getCategoryAPI();
            removeModal();
        }
    } 
}

export {createCategory};