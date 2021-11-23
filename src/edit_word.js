const updateWord = require('./db/update_word.js');

const editWord = (req, res) => {
    updateWord(req.body.id,req.body.english,req.body.transcription,req.body.russian,req.body.image,req.body.category, (err, data) => {
        try {
            if (err) {
                res.send(err);
            } else {
                res.send(data);
            }
        } catch (e) {
            res.status(500).send('something went wrong');
        }
    });
}

module.exports = editWord;

