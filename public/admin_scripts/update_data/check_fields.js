'use strict';

import {showErrorInput, clearError} from './show_error.js'

// Check empty fields and their length
function checkFields() {
    const input = document.querySelectorAll('.modal input[type="text"]');
    const errorMessage = document.querySelectorAll('.error-message');
    let validation = false;

    for (let i = 0; i < input.length; i++) {
        if (input[i].value.length === 0) {
            showErrorInput(input[i], errorMessage[i], 'Can\'t be blank');
            clearError(input[i], errorMessage[i]);
            validation = false;
            break;
        } else if (input[i].value.length > 20) {
            showErrorInput(input[i], errorMessage[i], 'Max length is 20 chars');
            clearError(input[i], errorMessage[i]);
            validation = false;
            break;
        } else {
            validation = true;
        }
    }
    return validation;
}

function checkUniqueCategory(category) {
    let validation = false;
    const input = document.querySelector('.modal input');
    const errorMessage = document.querySelector('.error-message');

    for(let i in category) {
        if (category[i].name === input.value.toLowerCase()) {
            validation = false;
            showErrorInput(input, errorMessage, 'Category is already exist');
            clearError(input, errorMessage);
            break;
        }
        else {
            validation = true;
        }
    }
    return validation;
}

export {checkFields,checkUniqueCategory};