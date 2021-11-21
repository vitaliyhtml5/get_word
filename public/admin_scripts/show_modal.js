'use strict';

import {addModalImage, addCategoryModal} from './add_content.js';
import {getWordIndex} from './get_word_index.js';
import {createCategory} from './update_data/create_category.js';

const overlay = document.querySelector('.overlay');


// Show modal with image
function showModalImage(words) {
    document.querySelectorAll('.td-image').forEach((el, index) => {
        el.onclick = () => {
            openModal();
            const id = document.querySelectorAll('.table-main tbody tr td:nth-child(1)')[index].textContent;
            getWordIndex(words, id);

            addModalImage(words[getWordIndex(words,id)].english, words[getWordIndex(words,id)].image);
            closeModal(document.querySelector('.modal-img button'));
        }
    });
}

// Create a new category
function createCategoryModal(category) {
    document.querySelector('.create-categoty-btn').addEventListener('click', () => {
        addCategoryModal();
        openModal();
        document.querySelector('.modal input').focus();
        closeModal(document.querySelectorAll('.modal-confirm button')[1]);
        document.querySelector('.modal').addEventListener('submit', (e) => {
            e.preventDefault();
            createCategory(category);
        });
    });
}

// Open modal
function openModal() {
    overlay.style.animation = 'openModal 0.8s forwards';
}

// Close modal
function closeModal(btn) {
    btn.addEventListener('click', removeModal);
    document.addEventListener('keydown', e => {
        if (e.code === 'Escape') {
            removeModal();
        }
    });
}

function removeModal() {
    overlay.style.animation = 'closeModal 0.5s forwards';
    overlay.innerHTML = '';
}

export {showModalImage, createCategoryModal, closeModal, removeModal};