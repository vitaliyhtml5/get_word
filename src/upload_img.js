const uploadImg = (req, res) => {
    let filedata = req.file.filename;
    try {
        res.send({image: filedata})
    } catch (e) {
        res.status(500).send({message: 'image was not uploaded'});
    }
}

module.exports = uploadImg;