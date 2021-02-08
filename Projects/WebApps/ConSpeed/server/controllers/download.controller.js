const { Download } = require("../models/download.model");
function getLastWeek() {
    var today = new Date();
    var lastWeek = new Date(today.getFullYear(), today.getMonth(), today.getDate() - 7);
    return lastWeek;
}
module.exports.getAllDownloads = (req, res) => {
    // inside find
    // "timestamp" : { 
        //     $lt: new Date(), 
        //     $gte: new Date(new Date().setDate(new Date().getDate()-1))
        // }   
    Download.find({
        
    })
        .then(dls => res.json(dls))
        .catch(err => res.status(400).json(err))
}
module.exports.addDownload = (req, res) => {
    console.log("The speed is: ")
    let dl = new Download()
    dl.speed = Number(Object.keys(req.body)[0]);
    console.log(dl);
    Download.create(dl)
        .then(newDl => res.json(newDl))
        .catch(err => res.status(400).json(err));
}
