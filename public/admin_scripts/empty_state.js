'use sctrict';

//show errors
function emptyState(img, text) {
    const errorPage = document.querySelector('.error-page');
    errorPage.style.display = 'block';
    errorPage.innerHTML = `
        <img src="${img}">
        <p>${text}</p>`;
}

export {emptyState};