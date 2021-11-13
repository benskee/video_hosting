const express = require('express');
const router = express.Router();
const File = require('../models/File');
const User = require('../models/User');
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
            const userInput = JSON.parse(req.body.userInput)
            const fileJSON = require(`../src/uploads/${req.file.filename}`)
            const newFile = new File({
                fileName: req.file.originalname,
                path: req.file.path,
                body: fileJSON,
                mediaURL: userInput.mediaURL,
                username: userInput.username,
                projectName: userInput.projectName,
                projectType: userInput.projectType,
                timeAdjust: parseInt(userInput.timeAdjust)
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
        const file = await File.findById(req.params.id);
        res.status(200).json({
            success: true,
            file
        });
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
})

router.get('/animation/:id', async (req, res) => {
    try {
        const file = await File.findById(req.params.id);
        res.status(200).json({
            success: true,
            file
        });
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
})

module.exports = router;