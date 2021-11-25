'use strict';

// Get json and csv files
function uploadFile() {
    const file = document.querySelectorAll('.upload-file');
    uploadAllData();

    function uploadAllData() {
        const loader = document.querySelector('.loader');
        loader.style.display = 'block';
        uploadData('/download-json', file[0]);
        setTimeout(() => {
            uploadData('/download-csv', file[1]).then(() => loader.style.display = 'none');
        },1000);
    }

    async function uploadData(endpoint, file) {
        const req = await fetch(endpoint);
        file.setAttribute('href', endpoint);
    }
}

export {uploadFile};