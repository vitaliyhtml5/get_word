const connection = require('./dbc.js');

const updateWord = (id,eng,transcription,rus,img,category,callback) => {
    const q = `UPDATE words 
    SET english ="${eng}",
    transcription ="${transcription}",
    russian ="${rus}",
    image ="${img}",
    category_id = (SELECT id FROM category WHERE name = "${category}")
    WHERE id = ${id};`;

    connection.query(q, (err,results) => {
        if (err) {
            callback('No connection to db', undefined);
        } else {
            callback(undefined, {message:'word was edited'});
        }
    });
}

module.exports = updateWord;