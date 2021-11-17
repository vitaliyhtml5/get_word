'use strict';

// Switch to random order
function switchRandom(words) {
    let random = false;
     
    document.querySelector('.random-icon').onclick = function() {
        if (!random) {
            this.classList.remove('random-icon_off');
            random = true;
            btn[0].style.display = 'none';
            btn[1].textContent = 'Random';
            btn[1].classList.add('random-btn');
        } else {
            this.classList.add('random-icon_off');
            random = false;
            btn[0].style.display = 'block';
            btn[1].textContent = 'Next';
            btn[1].classList.remove('random-btn');
        }
    }

    function getRandom() {
        return Math.floor(Math.random() * words.length);
    }
}

export {switchRandom};