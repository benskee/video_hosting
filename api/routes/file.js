const express = require('express');
const router = express.Router();
const File = require('../models/File');
const fs = require('fs');
const multer = require('multer');
var cors = require('cors');
router.use(cors());


const upload = multer();

router.post('/upload', upload.any(), async (req, res) => {
        try {
            const userInput = JSON.parse(req.body.userInput);
            const fileJSON = JSON.parse(req.files[0].buffer.toString())
            const newFile = new File({
                body: fileJSON,
                mediaURL: userInput.mediaURL,
                username: userInput.username,
                projectName: userInput.projectName,
                projectType: userInput.projectType,
                timeAdjust: parseInt(userInput.timeAdjust),
                interval: parseInt(userInput.interval)
            });
            await newFile.save();
        } catch (err) {
            console.error(err.message);
            res.status(500).send('Server Error');
        }
    return res.status(200).send('success');
});

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
});

router.put('/:id', async function (req, res) {
    const file = await File.findByIdAndUpdate(
        req.params.id,
        {
            mediaURL: req.body.mediaURL,
            projectName: req.body.projectName,
            timeAdjust: req.body.timeAdjust,
            interval: req.body.interval
        }
    );
    if (!file)
        return res.status(404).send("The file with the given ID was not found.");

    res.send(file);
});

router.delete('/:id', async function (req, res) {
    const file = await File.findByIdAndDelete(req.params.id);

    if (!file)
        return res.status(404).send("The file with the given ID was not found.");

    res.send(file);
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
});

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
});

module.exports = router;