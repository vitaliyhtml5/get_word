const connection = require('./dbc.js');

const deleteCategory = (category_id, callback) => {
    const q = `DELETE FROM category WHERE id = ${category_id};`; 
    const q2 = `DELETE FROM words WHERE category_id = ${category_id};`; 

    connection.query(q, (err, results) => {
        if (err) {
            callback('No connection to db', undefined);
        } else {
            connection.query(q2, (err, results) => {
                if (err) {
                    callback('No connection to db', undefined);
                } else {
                    callback(undefined, {message:'category was removed'});
                }
            });
        }
    });
}

module.exports = deleteCategory;