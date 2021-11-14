'use strict';

// API get all words
async function getAllWords() {
    const res = await fetch('/get-all-words');
    const data = await res.json();
    return data;
}

export {getAllWords};