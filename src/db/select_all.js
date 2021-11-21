const connection = require('./dbc.js');

const selectAll = callback => {
    const q = 'SELECT words.id,words.english,words.transcription,words.russian,words.image,category.name AS category FROM words JOIN category ON words.category_id = category.id;';
    connection.query(q, (err, results) => {
        if (err) {
            callback('No connection to db', undefined);
        } else {
            callback(undefined, results);
        }
    });
}

module.exports = selectAll;