const connection = require('./dbc.js');

const deleteWord = (word_id, callback) => {
    const q = `DELETE FROM words WHERE id = ${word_id}`;

    connection.query(q, (err, results) => {
        if (err) {
            callback('No connection to db', undefined);
        } else {
            callback(undefined, {message:'word was removed'});
        }
    });
}

module.exports = deleteWord;
