const userController = require('../controllers/usersController');

module.exports = (app) =>{

    app.post('/api/users/create', userController.register);

}