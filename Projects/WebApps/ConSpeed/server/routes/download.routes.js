const DownloadController = require('../controllers/download.controller');
module.exports = function(app){
    app.get('/api/downloads', DownloadController.getAllDownloads);
    app.post('/api/downloads/add', DownloadController.addDownload);
}