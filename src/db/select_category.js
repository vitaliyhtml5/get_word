const connection = require('./dbc.js');

const selectCategory = callback => {
    const q = `SELECT * FROM category;`;

    connection.query(q, (err, results) => {
        if (err) {
            callback('No connection to db', undefined);
        } else if (results.length === 0) {
            callback(undefined, {message: 'no results found'});
        } else {
            callback(undefined, results);
        }
    });
}

module.exports = selectCategory;