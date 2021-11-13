const selectAll = require('./db/select_all.js');

const getAll = (req, res) => {
    selectAll((err, data) => {
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

module.exports = getAll;