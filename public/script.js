'use strict';

import {useSingleSlider} from './scripts/slider.js';
import {showGrid} from './scripts/show_grid.js';


// Learn word section
const learnSingle = document.querySelector('#learn-word .word-single-wrap');
const learnGrid = document.querySelector('#learn-word .words-grid-wrap');
useSingleSlider();

document.querySelectorAll('.set-word-wrap li')[0].addEventListener('click', changeSingleGrid);


function changeSingleGrid() {
    if (learnSingle.style.display === 'flex') {
        showGrid();
    } else {
        useSingleSlider();
    }
}
