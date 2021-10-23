const mongoose = require('mongoose');

const FileSchema = new mongoose.Schema({
    filename: {
        type: String,
        required: true
    },
    path: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true
    },
    youtubeURL: {
        type: String,
        required: true
    },
    projectname: {
        type: String,
        required: true
    },
    projecttype: {
        type: String,
        required: true
    },
    body: {
        type: Object,
        required: false
    }
});

module.exports = File = mongoose.model('file', FileSchema);