const { Person } = require('../models/person.model');

module.exports.index = (request, response) => {
    response.json({
        message: "Hello World"
    });
}

module.exports.index = (request, response) => {
    response.json({
        message: "Hello World"
    });
}
// create
module.exports.createPerson = (request, response) => {
    const { firstName, lastName } = request.body;
    Person.create({
        firstName,
        lastName
    })
        .then(person => response.json(person))
        .catch(err => response.json(err));
}
// read
module.exports.getAllPeople = (request, response) => {
    Person.find({})
        .then(persons => response.json(persons))
        .catch(err => response.json(err))
}