const mongoose = require('mongoose');

const FileSchema = new mongoose.Schema({
    fileName: {
        type: String,
        required: true
    },
    path: {
        type: String,
        required: true
    },
    userName: {
        type: String,
        required: true
    },
    mediaURL: {
        type: String,
        required: true
    },
    projectName: {
        type: String,
        required: true
    },
    projectType: {
        type: String,
        required: true
    },
    timeAdjust: {
        type: Number,
        required: true
    },
    body: {
        type: Object,
        required: false
    }
});

module.exports = File = mongoose.model('file', FileSchema);