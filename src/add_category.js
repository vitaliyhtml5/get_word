const insertCategory = require('./db/insert_category.js');

const addCategory = (req, res) => {
    insertCategory(req.body.category, (err, data) => {
        try {
            if (err === 'No connection to db') {
                res.send(err);
            } else if (err === 'Non-english chars') {
                res.status(400).send({code: 400, message:'non-english chars'});
            } else {
                res.status(201).send(data);
            }
        } catch(e) {
            res.status(500).send('something went wrong');
        } 
    });
}

module.exports = addCategory;