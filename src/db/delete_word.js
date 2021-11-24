const fs = require('fs');
const path = require('path');
const connection = require('./dbc.js');

const deleteWord = (word_id, callback) => {
    const q = `SELECT image FROM words WHERE id = ${word_id}`;
    const q2 = `DELETE FROM words WHERE id = ${word_id}`;

    connection.query(q, (err, results) => {
        if (err) {
            callback('No connection to db', undefined);
        } else {
            try {
                const sourceUrls = path.join(__dirname, `../../public/img/words/${results[0].image}`);
                fs.unlinkSync(sourceUrls);
            } catch(e) {
                console.log(e);
            }

            connection.query(q2, (err, results) => {
                if (err) {
                    callback('No connection to db', undefined);
                } else {
                    callback(undefined, {message:'word was removed'});
                }
            });
        }
    });
}

module.exports = deleteWord;
