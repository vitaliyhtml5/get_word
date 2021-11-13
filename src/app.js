const http = require('http');
const url = require('url');
const mysql = require('mysql');

const connection = require('./db/dbc.js');
const getAll = require('./get_all.js');
const getByCategory = require('./get_by_category.js');

http.createServer((req, res) => {
    if (url.parse(req.url,true).query.category) {
        getByCategory(req, res);
    } else {
        getAll(req, res);
    }

}).listen(3000, () => console.log('Server is working on 3000 port'));