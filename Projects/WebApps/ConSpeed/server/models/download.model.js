const mongoose = require('mongoose');
const DownloadSchema = new mongoose.Schema({
    speed: {
        type: Number,
    }
}, {timestamps: true});
module.exports.Download = mongoose.model('Download', DownloadSchema);