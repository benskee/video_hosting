const mongoose = require('mongoose');

const FileSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    mediaURL: {
        type: String,
        required: true
    },
    projectName: {
        type: String,
        unique: true,
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
    interval: {
        type: Number,
        required: true
    },
    body: {
        type: Object,
        required: false
    }
});

module.exports = File = mongoose.model('file', FileSchema);