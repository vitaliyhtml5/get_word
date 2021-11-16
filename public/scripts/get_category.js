'use strict';

function getCategory(words, category) {   
    const wordsByCategory = [];
    for (let i = 0; i < words.length; i++) {
        if (words[i].category === category) {
            wordsByCategory.push(words[i]);
        }
    }
    return wordsByCategory;
}

export {getCategory};