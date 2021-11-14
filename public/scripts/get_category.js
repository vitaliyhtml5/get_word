'use strict';

// API get category
async function getCategory(param) {
    const loader = document.querySelector('.loader');
    loader.style.display = 'block';
    const res = await fetch(`/get-word?${param}`);
    const data = await res.json();
    loader.style.display = 'none';
    return data;
}

export {getCategory};