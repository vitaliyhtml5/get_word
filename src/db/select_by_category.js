const mysql = require('mysql');
const connection = require('./dbc.js');

const selectByCategory = (category, callback) => {
    let categoryArr = category.split(',');
    let q = `SELECT * FROM words WHERE category = "${categoryArr[0]}";`;

    if (categoryArr.length > 1) {
        q = `SELECT * FROM words WHERE category = "${categoryArr[0]}" `;
        for( let i = 1; i < categoryArr.length; i++) {
            q+= `OR category = "${categoryArr[i]}" `;
        }
    }

    connection.query(q, (err, results) => {
        if (err) {
            callback('No connection to db', undefined);
        } else {
            callback(undefined, results);
        }
    });
};

module.exports = selectByCategory;