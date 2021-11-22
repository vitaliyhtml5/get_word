'use strict';

import {removeModal} from '../show_modal.js';
import {getCategoryAPI} from '../../admin.js';
import {showAlert} from '../show_alert.js';

// Remove category
async function removeCategory(category_id) {
    const req = await fetch(`/remove-category?category_id=${category_id}`, {
        method: 'DELETE',
    });
    const res = await req.json();

    if (res.message === 'category was removed') {
        document.querySelector('.table-main tbody').innerHTML = ``;
        getCategoryAPI();
        showAlert('Category was removed');
        removeModal();
    }
}

export {removeCategory};