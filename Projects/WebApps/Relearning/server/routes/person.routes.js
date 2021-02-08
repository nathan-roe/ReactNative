const PersonController = require('../controllers/person.controller');
module.exports = function(app){
    app.get('/api', PersonController.index);
    app.post('/api/createPerson', PersonController.createPerson);
    app.get('/api/getAllPeople', PersonController.getAllPeople);

}