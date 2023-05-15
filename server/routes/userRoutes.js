const userController = require('../controllers/usersController');

module.exports = (app, upload) =>{

    app.post('/api/users/create',  userController.register);
    app.post('/api/users/createWithImage',  upload.array('image', 1),userController.registerWithImage);
    app.post('/api/users/login', userController.login);

    app.put('/api/users/update',   upload.array('image', 1),userController.registerWithImage);
    app.put('/api/users/updateWithoutImage', userController.updateWithoutImage);

};