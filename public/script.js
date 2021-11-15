'use strict';

import {useSingleSlider} from './scripts/make_slider.js';
import {showGrid} from './scripts/show_grid.js';
import {useFilter} from './scripts/set_filter.js';

// API queries
import {getAllWords} from './scripts/get_all_words.js';


// Learn word section
let allwords = [];
getAllWordsAPI();
async function getAllWordsAPI() {
    let allwords = await getAllWords();
    useSingleSlider(allwords);

    const learnSingle = document.querySelector('#learn-word .word-single-wrap');
    
    document.querySelector('.cards-view').addEventListener('click', changeSingleGrid);
    document.querySelector('.filter-icon').addEventListener('click', useFilter);
    
    function changeSingleGrid() {
        learnSingle.style.display === 'flex' ? showGrid(allwords) : useSingleSlider(allwords);
    }
}



