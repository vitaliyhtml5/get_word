'use strict';

// Show grid of words
import {getAllWords} from './get_all_words.js';

async function showGrid() {
    document.querySelector('.word-single-wrap').style.display = 'none';
    document.querySelectorAll('.set-word-wrap .material-icons')[0].textContent = 'crop_square';
    const gridWrap = document.querySelector('.words-grid-wrap');
    gridWrap.style.display = 'flex';
    
    const allWords = await getAllWords();
    clearGrids();
    
    let numberWords;
    if (allWords.length <= 9) {
        numberWords = allWords.length;
        document.querySelector('.words-grid-wrap .load-word button').style.display = 'none';
    } else {
        numberWords = 9;
    }

    addWords(0);
    function addWords(start) {
        for (let i = start; i < numberWords; i++) {
            gridWrap.innerHTML += `
                <div class="words-grid">
                    <button class="fav-btn material-icons" title="Mark as favorite">star</button>
                    <img src="img/words/${allWords[i].image}">
                    <b>${allWords[i].english}</b>
                    <i>${allWords[i].transcription}</i>
                    <span>${allWords[i].russian}</span>
                </div>`
        }
        loadMoreWords(); 
    }
    
    function loadMoreWords() {
        const btn = document.querySelector('.words-grid-wrap .load-word button');
        btn.addEventListener('click', (e) => {
            if ((numberWords + 9) <= allWords.length) {
                numberWords += 9;
                addWords(numberWords - 9);
            } else {
                let lastStart = numberWords;
                numberWords = allWords.length;
                e.target.style.display = 'none';
                addWords(lastStart);
            }
        });
    }

    // Default clear grids
    function clearGrids() {
        gridWrap.innerHTML = `<div class="load-word"><button class="button-main"><span class="material-icons">restart_alt</span>Add more</button></div>`;
    }
}

export {showGrid};