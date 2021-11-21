'use strict';

import {setFilter} from './use_filter.js';
import {createMainTable} from './create_main_table.js';

//Sort words by id, eng, rus, category
function sortWords(words) {
    const columns = ['id', 'english', 'russian', 'category'];
    const sortBtn = document.querySelectorAll('.sort-btn');

    sortBtn.forEach((el, index) => {
        el.onclick = () => {
            if (!el.classList.contains('sort-asc')) {
                clearSortState();
                el.classList.add('sort-asc');
                makeSorting(columns[index], 'asc');
            } else {
                clearSortState();
                el.classList.add('sort-desc');
                makeSorting(columns[index], 'desc');
            }
        }
    });

    function makeSorting(param, order) {
        let filteredWords = setFilter(words);
        const allWords = setOrderSorting(filteredWords, param, order);
        document.querySelector('.table-main tbody').innerHTML = ``;
        document.querySelector('.search-form input').value = '';
        createMainTable(allWords);
    }

    function setOrderSorting(filteredWords, param, order) {
        if (order === 'asc') {
            filteredWords.sort((a, b) => {
                if (param === 'english')return a.english > b.english ? 1 : -1;
                else if (param === 'russian')return a.russian > b.russian ? 1 : -1;
                else if (param === 'category')return a.category > b.category ? 1 : -1;
                else return a.id > b.id ? 1 : -1;
            });
        } else if (order === 'desc') {
            filteredWords.sort((a, b) => {
                if (param === 'english')return a.english < b.english ? 1 : -1;
                else if (param === 'russian')return a.russian < b.russian ? 1 : -1;
                else if (param === 'category')return a.category < b.category ? 1 : -1;
                else return a.id < b.id ? 1 : -1;
            });
        }
        return filteredWords; 
    }
}

function clearSortState() {
    document.querySelectorAll('.sort-btn').forEach(el => {
        el.classList.remove('sort-asc');
        el.classList.remove('sort-desc');
    });
}

export {sortWords,clearSortState};