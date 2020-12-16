const PersonController = require('../controllers/person.controller');
module.exports = function(app){
    // Create
    app.post('/api/createUser', PersonController.createUser);
    // Read 
    app.get('/api/findUser/:id', PersonController.findUser);
    app.get('/api/findAllUsers', PersonController.findAllUsers);
    // Update
    app.put('/api/updateUser/:id', PersonController.updateUser);
    // Delete
    app.delete('/api/deleteUser/"id', PersonController.deleteUser);
}