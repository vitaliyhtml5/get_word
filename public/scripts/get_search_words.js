'use strict';

import {showGrid} from './show_grid.js';

// Search word
let searchWords = [];

// API queries
async function searchWordsAPI(param) {
    const loader = document.querySelector('.loader');
    loader.style.display = 'block';
    const res = await fetch(`/search-word?word=${param}`);
    const data = await res.json();
    loader.style.display = 'none';
    return data;
}

async function getSearchWords(e) {
    e.preventDefault();
    const input = document.querySelector('.search-form input');
    const messageWrap = document.querySelector('.search-message');
    const messageImg = document.querySelector('.search-message img');
    const messageText = document.querySelector('.search-message p');

    if (input.value === '') {
        showMessage('img/search.png', 'Try to search a word');
    } else {
        const res = await searchWordsAPI(input.value.toLowerCase());
        searchWords = res;

        if (searchWords.length > 0) {
            document.querySelector('.words-grid-wrap').style.display = 'flex';
            messageWrap.style.display = 'none';
            showGrid(searchWords, true);
        } else if (searchWords.message === 'no results found') {
            showMessage('img/no-results.png', 'Oops! No results found');
        }
    }
    
    function showMessage(src, text) {
        document.querySelector('.words-grid-wrap').style.display = 'none';
        messageWrap.style.display = 'flex';
        messageImg.src = src;
        messageText.textContent = text;
    }
}

export {getSearchWords};