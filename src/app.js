const path = require('path');
const express = require('express');

const app = express();
app.use(express.static(path.join(__dirname, '../public'), {
    extensions: ['html']
})); 

const connection = require('./db/dbc.js');
const getAll = require('./get_all.js');
const getByCategory = require('./get_by_category.js');
const searchWord = require('./search_word.js');

app.get('/get_all_words', (req, res) => getAll(req, res));

app.get('/get_word', (req, res) => getByCategory(req, res));

app.get('/search_word', (req, res) => searchWord(req, res));

// 404 error
app.get('*/*', (req, res) => res.status(404).end());

app.listen(3000, () => console.log('Server is working on 3000 port'));