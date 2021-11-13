const connection = require('./dbc.js');

const searchWord = (param, callback) => {
    const q = `SELECT * FROM words WHERE english LIKE "%${param}%" OR russian LIKE "%${param}%"`;
    connection.query(q, (err, results) => {
        if (err) {
            callback('No connection to db', undefined);
        } else if (results.length === 0) {
            callback(undefined, {message: 'not found'});
        } else {
            callback(undefined, results);
        }
    });
}

module.exports = searchWord;