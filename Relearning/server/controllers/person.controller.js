const {Person} = require('../models/person.model');
module.exports.index = (req, res) => {
    res.json({
        message: "Hello World"
    });
}
module.exports.createPerson = (req, res) => {
    Person.create(req.body)
        .then(user => res.json({user: user}))
        .catch(err => res.json({message: "Something went wrong", error: err}))
}