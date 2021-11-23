'use strict';

import {getAllWords,getAllCategory} from './scripts/get_all_words.js';
import {addContent} from './admin_scripts/add_content.js';
import {createMainTable} from './admin_scripts/create_main_table.js';
import {getFilter} from './admin_scripts/use_filter.js';
import {searchWord} from './admin_scripts/search_word.js';
import {sortWords} from './admin_scripts/sort_words.js';
import {showModalImage,createCategoryModal,editCategoryModal,removeCategoryModal,editWordModal,removeWordModal} from './admin_scripts/show_modal.js';

//Admin Panel
addContent(0);
let allWords;
let allCategory;
getDataAPI();

async function getDataAPI() {
    const data = await getAllWords();
    allWords = data;
    changeMenu(allWords);
    createMainTable(allWords);
    getFilter(allWords);
    searchWord(allWords);
    sortWords(allWords);
    showModalImage(allWords);
    removeWordModal(allWords);
    editWordModal(allWords);
}

async function getCategoryAPI() {
    const data = await getAllCategory();
    allCategory = data;
    createMainTable(data,'category');
    searchWord(allCategory, 'category');
    sortWords(allCategory, 'category');
    createCategoryModal(allCategory);
    editCategoryModal(allCategory);
    removeCategoryModal(allCategory);
}

function changeMenu(allWords) {
    const menu = document.querySelectorAll('.data-wrap');
    const sidebarBtn = document.querySelectorAll('.menu-item');
    const clearChecked = () => sidebarBtn.forEach(el => el.classList.remove('nav-item_checked'));
    const clearMenu = () => menu.forEach(el => el.innerHTML =``);
    const clearError = () => document.querySelector('.error-page').style.display = 'none';

    sidebarBtn.forEach((el, index) => {
        el.onclick = () => {
            clearChecked();
            clearMenu();
            clearError();
            el.classList.add('nav-item_checked');

            if (index === 0) {
                addContent(index);
                getDataAPI();
            } else if (index === 1) {
                addContent(index);
                getCategoryAPI();
            } else if (index === 2) {
                addContent(index);
            }
        }
    });
}

export {getCategoryAPI,getDataAPI};

