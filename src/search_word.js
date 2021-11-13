const url = require('url');
const searchWordQuery = require('./db/search_word.js');

const searchWord = ((req, res) => {
    const word = url.parse(req.url,true).query.word;

    searchWordQuery(word, (err, data) => {
        try {
            if (err) {
                res.status(400).send(err);
            } else {
                res.send(data);
            }
        } catch (e) {
            res.status(500).send('something went wrong');
        }
    });
});

module.exports = searchWord;