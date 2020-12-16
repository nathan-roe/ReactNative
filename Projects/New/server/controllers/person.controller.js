const {User} = require('../models/person.model');
//  Create 
module.exports.createUser = (req, res) => {
    User.create({firstName, lastName, email, password, confPass})
        .then(user => res.json(user))
        .catch(err => res.status(400).json(err));
}
// Read
module.exports.findAllUsers = (req, res) => {
    User.find({})
        .then(user => res.json(user))
        .catch(err => res.status(400).json(err));
}
module.exports.findUser = (req, res) => {
    User.findOne({"_id": req.params.id})
        .then(user => res.json(user))
        .catch(err => res.status(400).json(err));
}
// Update
module.exports.updateUser = (req, res) => {
    User.findOneAndUpdate({"_id": req.params.id}, req.body, {runValidators: true, new: true})
        .then(user => res.json(user))
        .catch(err => res.status(400).json(err));
}
// Delete
module.exports.deleteUser = (req, res) => {
    User.findOneAndDelete({"_id": req.params.id})
        .then(user => res.json(user))
        .catch(err => res.status(400).json(err));
}