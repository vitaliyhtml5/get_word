'use strict';

// Show grid of words
function showGrid(words, onlyGridsMenu = false) {
    if (!onlyGridsMenu) {
        document.querySelector('.word-single-wrap').style.display = 'none';
        document.querySelector('.cards-view').textContent = 'crop_square';
        document.querySelector('.random-icon').style.display = 'none';
        document.querySelector('.eye-icon').style.display = 'none';
    }
    
    const gridWrap = document.querySelector('.words-grid-wrap');
    clearGrids();
    gridWrap.style.display = 'flex';

    let numberWords;
    if (words.length <= 9) {
        numberWords = words.length;
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
                    <img src="img/words/${words[i].image}">
                    <b>${words[i].english}</b>
                    <i>${words[i].transcription}</i>
                    <span>${words[i].russian}</span>
                </div>`
        }
        loadMoreWords(); 
    }
    
    function loadMoreWords() {
        const btn = document.querySelector('.words-grid-wrap .load-word button');
        btn.addEventListener('click', (e) => {
            if ((numberWords + 9) <= words.length) {
                numberWords += 9;
                addWords(numberWords - 9);
            } else {
                let lastStart = numberWords;
                numberWords = words.length;
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