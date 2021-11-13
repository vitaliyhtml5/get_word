const mysql = require('mysql');
const connection = require('./dbc.js');

const selectAll = callback => {
    const q = 'SELECT * FROM words;';
    connection.query(q, (err, results) => {
        if (err) {
            callback('No connection to db', undefined);
        } else {
            callback(undefined, results);
        }
    });
}

module.exports = selectAll;