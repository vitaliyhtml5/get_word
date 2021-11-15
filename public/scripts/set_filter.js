'use strict';

import {useSingleSlider} from './make_slider.js';
import {showGrid} from './show_grid.js';

function setFilter() {
    const category = document.querySelectorAll('.filter-wrap input');
    let param = '';
    category.forEach(el => {
        if (el.checked) {
            param += `category=${el.value}&`;
        }
    });
    param = param.slice(0,-1);
    return param;
}

const filterWrap = document.querySelector('.filter-wrap');
const filterBtn = document.querySelectorAll('.filter-btn-wrap button');

function useFilter() {
    if (!filterWrap.classList.contains('show-flex')) {
        filterWrap.classList.add('show-flex');
    } else  {
        closeFilter()
    }

    filterBtn[0].addEventListener('click', () => {
        // changeSingleGrid();
        useSingleSlider();
        closeFilter();
    });
}

// function changeSingleGrid() {
//     const learnSingle = document.querySelector('#learn-word .word-single-wrap');
//     if (learnSingle.style.display === 'flex') {
//         useSingleSlider();
//     } else {
//         showGrid();
//     }
// }

filterBtn[1].addEventListener('click', closeFilter);

function closeFilter() {
    filterWrap.classList.remove('show-flex');
}

export {setFilter, useFilter};