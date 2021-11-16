'use strict';

// Changing menu in sidebar
function changeMenu() {
    const sidebar = document.querySelectorAll('.nav-list li');
    const menu = document.querySelectorAll('.menu');
    const clearSidebar = () => sidebar.forEach(el => el.classList.remove('nav-item_checked'));
    const clearMenu = () => menu.forEach(el => el.style.display = 'none');
    menu[0].style.display = 'block';

    sidebar.forEach((el, index) => {
        el.onclick = (e) => {
            clearSidebar();
            clearMenu();
            e.stopPropagation();
            el.classList.add('nav-item_checked');
            if (index === 1) {
                el.classList.remove('nav-item_checked');
                sidebar[index + 1].classList.add('nav-item_checked');
                menu[1].style.display = 'block';
            } else if (index === 0) {
                menu[0].style.display = 'block';
            } else if (index !== 1) {
                menu[index - 1].style.display = 'block';
            }
        }
    });
}

export {changeMenu};