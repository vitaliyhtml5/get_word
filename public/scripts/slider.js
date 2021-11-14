'use strict';

// Single slider
import {getAllWords} from './get_all_words.js';

async function useSingleSlider() {
    const allWords = await getAllWords();
    document.querySelector('.words-grid-wrap').style.display = 'none';
    document.querySelectorAll('.set-word-wrap .material-icons')[0].textContent = 'grid_view';

    const quantity = document.querySelector('.word-single-wrap .counter');
    const img = document.querySelector('.word-img-wrap img');
    const eng = document.querySelector('.word-single-wrap b');
    const sound = document.querySelector('.word-single-wrap i');
    const ru = document.querySelector('.word-single-wrap span');
    const btn = document.querySelectorAll('.word-single-wrap .btn-wrap button');
    let counter = 0;

    changeSlider();

    btn[0].addEventListener('click', moveSliderBack);
    btn[1].addEventListener('click', moveSliderForward);
    document.addEventListener('keydown', e => {
        if (e.code === 'ArrowRight' || e.code === 'ArrowUp') {
            moveSliderForward();
        }
    });
    document.addEventListener('keydown', e => {
        if (e.code === 'ArrowLeft' || e.code === 'ArrowDown') {
            moveSliderBack();
        }
    });

    function moveSliderForward() {
        counter++;
        if (counter === allWords.length) {
            counter = 0;
        }
        changeSlider();
    }

    function moveSliderBack() {
        counter--;
        if (counter < 0 ) {
            counter = allWords.length - 1;
        }
        changeSlider();
    }

    function changeSlider() {
        quantity.textContent = `${counter+1}/${allWords.length}`;
        img.src = `img/words/${allWords[counter].image}`;
        eng.textContent = allWords[counter].english;
        sound.textContent = allWords[counter].transcription;
        ru.textContent = allWords[counter].russian;
    }
}

export {useSingleSlider}