const http = require('http');
const url = require('url');
const mysql = require('mysql');

const connection = require('./db/dbc.js');
const getAll = require('./get_all.js');
const getByCategory = require('./get_by_category.js');
const searchWord = require('./search_word.js');

http.createServer((req, res) => {
    if (req.url === '/get_word') {
        getAll(req, res);
    } else if (req.url.includes('/get_word') && url.parse(req.url,true).query.category) {
        getByCategory(req, res);
    } else if (req.url.includes('/search_word') && url.parse(req.url,true).query.word) {
        searchWord(req, res);
    } else {
        res.writeHead(404, {'Content-Type': 'text/plain'}).end('Not found');
    }

}).listen(3000, () => console.log('Server is working on 3000 port'));