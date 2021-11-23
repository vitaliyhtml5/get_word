'use strict';

import {getAllCategory} from '../scripts/get_all_words.js';

// Open dropdown with categories
function openDropdown(categoryValue) {
    const list = document.querySelector('.dropdown-list');
    let chosenValue;
    let listTitle;
    let category;
    let arrow;
    
    getCategory();
    async function getCategory() {
        const data = await getAllCategory();
        category = data[0].name;
        list.innerHTML = `<li class="default-value"><span class="chosen-category">Category: ${categoryValue}</span><span class="material-icons">expand_more</span></li>`;
        createList(data);
    }

    function createList(data) {
        for (let i in data) {
            list.innerHTML += `<li class="dropdown-value">${data[i].name}</li>`;
        }
        listTitle = document.querySelector('.default-value');
        chosenValue = document.querySelector('.chosen-category');
        arrow = document.querySelector('.dropdown-list .material-icons');
        showDropdown();
    }

    function showDropdown() {
        listTitle.addEventListener('click', function() {
            !this.classList.contains('list-expand') ? expandDropdown() : collapseDropdown();
        });
    }

    function chooseCategory() {
        document.querySelectorAll('.dropdown-value').forEach(el => {
            el.onclick = () => {
                category = el.textContent;
                chosenValue.textContent = `Choose a category: ${category}`;
                collapseDropdown();
            }
        });
    }

    function expandDropdown() {
        listTitle.classList.add('list-expand');
        chosenValue.textContent = 'Choose a category:';
        list.style = 'height:auto; overflow: auto';
        arrow.style = 'transform: rotate(180deg);';
        chooseCategory();
        list.addEventListener('click', (e) => e.stopPropagation());
        document.body.addEventListener('click', collapseDropdown);
        document.addEventListener('keyup', e => {
            if (e.key === 'Escape') collapseDropdown();
        });
    }
    function collapseDropdown() {
        list.scroll(0,0);
        listTitle.classList.remove('list-expand');
        chosenValue.textContent = `Category: ${category}`;
        list.style = '42px; overflow: hidden';
        if (arrow) arrow.style = 'transform: rotate(0deg);';
    }
}

export {openDropdown};