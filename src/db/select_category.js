const connection = require('./dbc.js');

const selectCategory = callback => {
    const q = `SELECT * FROM category;`;

    connection.query(q, (err, results) => {
        if (err) {
            callback('No connection to db', undefined);
        } else {
            callback(undefined, results);
        }
    });
}

module.exports = selectCategory;