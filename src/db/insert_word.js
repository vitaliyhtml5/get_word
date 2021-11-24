const connection = require('./dbc.js');

const insertWord = (eng,transcription,rus,img,category,callback) => {
    const q = `INSERT INTO words (english,transcription,russian,image,category_id)
    VALUES ("${eng}","${transcription}","${rus}","${img}",(SELECT id FROM category WHERE name = "${category}"));`;

    connection.query(q, (err,results) => {
        if (err) {
            callback('No connection to db', undefined);
        } else {
            callback(undefined, {message:'word was created'});
        }
    });
}

module.exports = insertWord;