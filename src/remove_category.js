const deleteCategory = require('./db/delete_category.js');

const removeCategory = (req, res) => {
    deleteCategory(req.query.category_id, (err, results) => {
        try {
            if (err) {
                res.send(err);
            } else {
                res.send(results);
            }
        } catch(e) {
            res.status(500).send('something went wrong');
        }
    });
}

module.exports = removeCategory;