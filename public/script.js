'use strict';

import {useSingleSlider} from './scripts/make_slider.js';
import {showGrid} from './scripts/show_grid.js';
import {useFilter} from './scripts/set_filter.js';
import {changeMenu} from './scripts/change_menu.js';
import {addContent} from './scripts/add_content.js';

// API queries
import {getAllWords} from './scripts/get_all_words.js';

let allWords = [];

// Get all words
getAllWordsAPI();
async function getAllWordsAPI() {
    addContent(0);
    const res = await getAllWords();
    allWords = res;
    useSingleSlider(allWords);
    getWords(allWords);
    changeMenu(allWords);
}

// Change single word/grid
function getWords(words) {   
    useSingleSlider(words);
    let single = true;

    document.querySelector('.cards-view').addEventListener('click', () => {
        if (single) {
            showGrid(words);
            single = false;
        } else {
            useSingleSlider(words);
            single = true;
        }
    });
}

// Filter
document.querySelector('.filter-icon').addEventListener('click', () => useFilter(allWords));




export {getWords};