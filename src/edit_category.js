const updateCategory = require('./db/update_category.js');

const editCategory = (req, res) => {
    updateCategory(req.body.category, req.body.id, (err, data) => {
        try {
            if (err === 'No connection to db') {
                res.send(err);
            } else if (err === 'Non-english chars') {
                res.status(400).send({code: 400, message:'non-english chars'});
            } else {
                res.send(data);
            }
        } catch(e) {
            res.status(500).send('something went wrong');
        } 
    });
}

module.exports = editCategory;