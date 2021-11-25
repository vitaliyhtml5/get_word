const fs = require('fs');
const selectAll = require('./db/select_all.js');

const downloadWordsJson = (req, res) => {
    selectAll((err, data) => {
        try {
            fs.writeFile('./download-files/words.json', JSON.stringify(data), (err) => {
                if (err === 'No connection to db') {
                    res.send(err);
                } else {
                    res.download('./download-files/words.json');
                }
            });
        } catch (e) {
            res.status(500).send('something went wrong');
        }
    });
}

const downloadWordsCsv = (req, res) => {
    selectAll((err, data) => {
        try {
            const fastcsv = require('fast-csv');
            const ws = fs.createWriteStream('./download-files/words.csv');
            fastcsv 
            .write(data, { headers: true }) 
            .pipe(ws)
            setTimeout(() => {
                err === 'No connection to db' ? res.send(err) : res.download('./download-files/words.csv')}, 200);
        } catch (e) {
            res.status(500).send('something went wrong');
        }
    });
}

module.exports = {downloadWordsCsv,downloadWordsJson};