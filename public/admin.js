'use strict';

import {getAllWords} from './scripts/get_all_words.js';
import {createMainTable} from './admin_scripts/create_main_table.js'
import {useFilter, getFilter} from './admin_scripts/use_filter.js';
import {searchWord} from './admin_scripts/search_word.js'

//Admin Panel
let allWords;
getDataAPI();

async function getDataAPI() {
    const data = await getAllWords();
    createMainTable(data);
    allWords = data;
    getFilter(allWords);
    searchWord(allWords);
}


// Filter
document.querySelector('.filter-icon').addEventListener('click', () => useFilter(allWords));

