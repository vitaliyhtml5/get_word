const connection = require('./dbc.js');

const deleteCategory = (category_id, callback) => {
    const q = `DELETE FROM category WHERE id = ${category_id};`;

    connection.query(q, (err, results) => {
        if (err) {
            callback('No connection to db', undefined);
        } else {
            callback(undefined, {message:'category was removed'});
        }
    });
}

module.exports = deleteCategory;