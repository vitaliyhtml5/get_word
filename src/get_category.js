const selectCategory = require('./db/select_category.js');

const getCategory = (req, res) => {
    selectCategory((err, data) => {
        try {
            if (err) {
                res.send(err);
            } else {
                res.send(data);
            }
        } catch(e) {
            res.status(500).send('something went wrong');
        }
    });
}

module.exports = getCategory;

