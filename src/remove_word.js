const deleteWord = require('./db/delete_word.js');

const removeWord = (req, res) => {
    deleteWord(req.query.word_id, (err, results) => {
        try {
            if (err) {
                res.send(err);
            } else {
                res.send(results);
            }
        } catch(e) {
            res.status(500).send('something went wrong');
        }
    });
}

module.exports = removeWord;