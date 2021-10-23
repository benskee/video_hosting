const express = require('express');
const router = express.Router();
const File = require('../models/File');
const multer = require('multer');
var cors = require('cors');
router.use(cors())

 
var storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'src/uploads');
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + '_' + file.originalname);
    }
})

const upload = multer({ storage: storage }).single("file");

router.post('/', function (req, res) {
    upload(req, res, async function (err) {
        if (err instanceof multer.MulterError) {
            return res.status(500).json(err);
        } else if (err) {
            return res.status(500).json(err);
        }
        try {
            console.log(JSON.parse(req.body.userInput))
            const userInput = JSON.parse(req.body.userInput)
            const filejson = require(`../src/uploads/${req.file.filename}`)
            const newFile = new File({
                filename: req.file.originalname,
                path: req.file.path,
                body: filejson,
                youtubeURL: userInput.youtubeURL,
                username: userInput.username,
                projectname: userInput.projectname,
                projecttype: userInput.projecttype
            });
            await newFile.save();
        } catch (err) {
            console.error(err.message);
            res.status(500).send('Server Error');
        }
    });
    return res.status(200).send(req.file);
});

router.get('/', async (req, res) => {
    try {
        const files = await File.find({});
        console.log(files)
        res.status(200).json({
            success: true,
            files
        });
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
})

router.get('/:id', async (req, res) => {
    try {
        console.log(req.params)
        const files = await File.findById(req.params._id);
        console.log(files)
        res.status(200).json({
            success: true,
            files
        });
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
})

module.exports = router;