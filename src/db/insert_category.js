const validator = require('validator');
const connection = require('./dbc.js');

const insertCategory = (categoryName, callback) => {
    
    if (!validator.isAlpha(categoryName,'en-US', {ignore:' '}) && !validator.isAlpha(categoryName,'en-US', {ignore:'-'}) && !validator.isAlpha(categoryName,'en-US', {ignore:'\''})) {
        callback('Non-english chars', undefined);
    } else {
        const q = `INSERT INTO category (name) VALUES ("${categoryName}");`;
        connection.query(q, (err, results) => {
            if (err) {
                callback('No connection to db', undefined);
            } else {
                callback(undefined, {message:'category was added'});
            }
        });
    }
}

module.exports = insertCategory;