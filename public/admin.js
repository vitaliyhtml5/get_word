'use strict';

import {getAllWords} from './scripts/get_all_words.js';
import {makeMainTable} from './admin_scripts/make_main_table.js'

//Admin Panel
getDataAPI();

async function getDataAPI() {
    const data = await getAllWords();
    makeMainTable(data);
}


