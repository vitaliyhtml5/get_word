'use strict';

//add content for each menu
function addContent(index) {
    const menu = document.querySelectorAll('.data-wrap');
    if (index === 0) {
        menu[0].innerHTML = `
        <div class="tools-wrap">
            <form class="search-form">
                <input type="text" autofocus>
                <button class="button-main">Search</button>
            </form>
            <span class="filter-clear"></span>
            <ul class="set-word-wrap">
                <li class="material-icons filter-icon" title="Filter">filter_alt</li>
            </ul>
            <div class="filter-wrap">
                <h3>Choose category</h3>
                <div class="category-wrap"></div>
                <div class="filter-btn-wrap">
                    <button class="button-main" type="button">Apply filter</button>
                    <button class="button-main" type="button">Cancel</button>
                </div>
            </div>
        </div>
        <div class="table-main-wrap">
            <table class="table-main">
                <thead>
                    <tr>
                        <th>id<button class="material-icons sort-btn">south</button></th>
                        <th>english<button class="material-icons sort-btn">south</button></th>
                        <th>transcription</th>
                        <th>russian<button class="material-icons sort-btn">south</button></th>
                        <th>image</th>
                        <th>category<button class="material-icons sort-btn">south</button></th>
                        <th>action</th>
                    </tr>
                </thead>
                <tbody></tbody>
            </table>
            <div class="load-word"><button class="button-main"><span class="material-icons">restart_alt</span>Show more</button>
            </div>
        </div>`;
    } else if (index === 1) {
        menu[1].innerHTML = `
        <div class="tools-wrap">
            <form class="search-form">
                <input type="text" autofocus>
                <button class="button-main">Search</button>
            </form>
            <button class="button-main create-categoty-btn"><span class="material-icons">add_circle_outline</span> New category</button>
        </div>
        <div class="table-main-wrap">
            <table class="table-main">
                <thead>
                    <tr>
                        <th>id<button class="material-icons sort-btn">south</button></th>
                        <th>category<button class="material-icons sort-btn">south</button></th>
                        <th>action</th>
                    </tr>
                </thead>
                <tbody></tbody>
            </table>
            <div class="load-word"><button class="button-main"><span class="material-icons">restart_alt</span>Show more</button>
            </div>
        </div>`;
    } else if (index === 2) {
        menu[2].innerHTML = `<p>Hello</p>`
    }
}

export {addContent};