'use strict';

// Show grid of words
import {getAllWords} from './get_all_words.js';

async function showGrid() {
    document.querySelector('.word-single-wrap').style.display = 'none';
    document.querySelectorAll('.set-word-wrap .material-icons')[0].textContent = 'crop_square';

    const allWords = await getAllWords();
    const gridWrap = document.querySelector('.words-grid-wrap');
    
    addWords();

    function addWords() {
        for (let i = 0; i < allWords.length; i++) {
            gridWrap.innerHTML += `
                <div class="words-grid">
                    <button class="fav-btn material-icons" title="Mark as favorite">star</button>
                    <img src="img/words/${allWords[i].image}">
                    <b>${allWords[i].english}</b>
                    <i>${allWords[i].transcription}</i>
                    <span>${allWords[i].russian}</span>
                </div>`
        } 
    }
}

export {showGrid};