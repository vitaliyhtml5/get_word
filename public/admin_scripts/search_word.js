'use strict'

import {setFilter} from './use_filter.js';
import {createMainTable} from './create_main_table.js';
import {showErrorImg} from './show_error.js'

// Search by EventTarget, ru, category
function searchWord(words) {
    const searchForm = document.querySelector('.search-form');
    const input = document.querySelector('.search-form input');
    const table = document.querySelector('.table-main-wrap');

    searchForm.addEventListener('submit', (e) => {
        e.preventDefault();
        let filteredWords = setFilter(words);
        const searchWords = [];
        
        for (let i in filteredWords) {
            if (filteredWords[i].english.indexOf(input.value.toLowerCase()) !== -1 || filteredWords[i].russian.indexOf(input.value.toLowerCase()) !== -1) {
                searchWords.push(filteredWords[i]);
            }
        }
        if (searchWords.length > 0) {
            table.style.display = 'block';
            document.querySelector('.error-page').style.display = 'none';
            document.querySelector('.table-main tbody').innerHTML = ``;
            createMainTable(searchWords);
        } else {
            table.style.display = 'none';
            showErrorImg('img/no-results.png', 'Oops! No results found');
        }
    });  
}

export {searchWord};