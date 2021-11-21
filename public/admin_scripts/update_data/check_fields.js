'use strict';

import {showErrorInput, clearError} from './show_error.js'

// Check empty fields and their length
function checkFields() {
    const input = document.querySelectorAll('.modal input');
    const errorMessage = document.querySelectorAll('.error-message');
    let validation = false;

    input.forEach((el,index) => {
        if (el.value.length === 0) {
            showErrorInput(el, errorMessage[index], 'Can\'t be blank');
            clearError(el, errorMessage[index]);
        } else if (el.value.length > 20) {
            showErrorInput(el, errorMessage[index], 'Max length is 20 chars');
            clearError(el, errorMessage[index]);
        } else {
            validation = true;
        }
    });
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