'use strict';

import {getWords} from '../script.js';
import {useSingleSlider} from './make_slider.js';

// Set filter 
function setFilter(words) {
    const category = document.querySelectorAll('.filter-wrap input');   
    const wordsByCategory = [];
    for (let i = 0; i < words.length; i++) {
        category.forEach(el => {
            if (el.checked && words[i].category === el.value) {
                wordsByCategory.push(words[i]);
            }
        });
    }
    if (wordsByCategory.length === 0) {
        return words;
    } else {
        return wordsByCategory;
    } 
}

const filterWrap = document.querySelector('.filter-wrap');
const filterBtn = document.querySelectorAll('.filter-btn-wrap button');

function useFilter(words) {
    if (!filterWrap.classList.contains('show-flex')) {
        filterWrap.classList.add('show-flex');
    } else  {
        closeFilter();
    }

    filterBtn[0].addEventListener('click', () => {
        let filtereWords = setFilter(words)
        getWords(filtereWords);
        closeFilter();
    });
}


filterBtn[1].addEventListener('click', closeFilter);

function closeFilter() {
    filterWrap.classList.remove('show-flex');
}

export {setFilter, useFilter};