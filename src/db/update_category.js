const validator = require('validator');
const connection = require('./dbc.js');

const updateCategory = (categoryName, categoryId, callback) => {
    
    if (!validator.isAlpha(categoryName,'en-US', {ignore:' '}) && !validator.isAlpha(categoryName,'en-US', {ignore:'-'}) && !validator.isAlpha(categoryName,'en-US', {ignore:'\''})) {
        callback('Non-english chars', undefined);
    } else {
        const q = `UPDATE category SET name = "${categoryName}" WHERE id = ${categoryId};`;
        connection.query(q, (err, results) => {
            if (err) {
                callback('No connection to db', undefined);
            } else {
                callback(undefined, {message:'category was edited'});
            }
        });
    }
}

module.exports = updateCategory;