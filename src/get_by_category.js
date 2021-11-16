const url = require('url');
const selectByCategory = require('./db/select_by_category.js');

const getByCategory = (req, res) => {
    const category = url.parse(req.url,true).query.category;
    
    selectByCategory(category.toString(), (err, data) => {
        try {
            if (err) {
                res.status(400).send(err)
            } else {
                res.send(data);
            }
        } catch (e) {
            res.status(500).send('something went wrong');
        } 
    });
}

module.exports = getByCategory;