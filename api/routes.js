const express = require('express');
const router = express.Router();
const File = require('../models/File');
const User = require('../models/User');
const fs = require('fs')
const path = require('path');
// const uploadService = require('../src/services/uploadService')
const multer = require('multer');
var cors = require('cors');
router.use(cors())

 
var storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'src/uploads');
    },
    filename: function (req, file, cb) {
        cb(null, "uploadedFile.json");
    }
})

const upload = multer({ storage: storage }).single("file");

router.delete('/delete', function (req, res) {
    const directory = './src/uploads';

    fs.readdirSync(directory, (err, files) => {
        if (err) throw err;
        for (const file of files) {
            fs.unlink(path.join(directory, file), err => {
            if (err) throw err;
            });
        }
    });
    return res.status(200).send('success');

})

router.post('/upload', function (req, res) {
    upload(req, res, async function (err) {
        if (err instanceof multer.MulterError) {
            return res.status(500).json(err);
        } else if (err) {
            return res.status(500).json(err);
        }
        try {
            const userInput = JSON.parse(req.body.userInput)
            const fileJSON = require('../src/uploads/uploadedFile.json')
            const newFile = new File({
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
    })
    return res.status(200).send('success');
})

router.post('/', async function (req, res) {
        try {
            const userInput = JSON.parse(req.body.userInput)
            const fileJSON = require('./src/uploads/uploadedFile.json')
            const newFile = new File({
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
        return res.status(200).send('success');
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