'use strict';

// import {addContent} from './add_content.js';
// import {createMainTable} from './create_main_table.js';
// import {getAllCategory} from '../scripts/get_all_words.js';
// import {getFilter} from './use_filter.js';
// import {searchWord} from './search_word.js';
// import {sortWords} from './sort_words.js';

// //Change menu items in the sidebar
// function changeMenu(allWords) {
//     const menu = document.querySelectorAll('.data-wrap');
//     const sidebarBtn = document.querySelectorAll('.menu-item');
//     const clearChecked = () => sidebarBtn.forEach(el => el.classList.remove('nav-item_checked'));
//     const clearMenu = () => menu.forEach(el => el.innerHTML =``);
//     const clearError = () => document.querySelector('.error-page').style.display = 'none';

//     sidebarBtn.forEach((el, index) => {
//         el.onclick = () => {
//             clearChecked();
//             clearMenu();
//             clearError();
//             el.classList.add('nav-item_checked');

//             if (index === 0) {
//                 addContent(index);
//                 createMainTable(allWords);
//                 getFilter(allWords);
//                 searchWord(allWords);
//                 sortWords(allWords);
//             } else if (index === 1) {
//                 addContent(index);
//                 let allCategory;
//                 getCategoryAPI();
//                 async function getCategoryAPI() {
//                     const data = await getAllCategory();
//                     allCategory = data;
//                     createMainTable(data, 'category');
//                     console.log(allCategory)
//                 }
//             } else if (index === 2) {
//                 addContent(index);
//             }
//         }
//     });
// }

// export {changeMenu};