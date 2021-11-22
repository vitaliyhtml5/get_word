const connection = require('./dbc.js');

const deleteCategory = (category_id, callback) => {
    const q = `
    DELETE category, words FROM category
    INNER JOIN words
    ON words.category_id = category.id
    WHERE words.category_id = ${category_id} OR category.id = ${category_id}`;

    connection.query(q, (err, results) => {
        if (err) {
            callback('No connection to db', undefined);
        } else {
            callback(undefined, {message:'category was removed'});
        }
    });
}

module.exports = deleteCategory;