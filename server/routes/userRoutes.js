const userController = require('../controllers/usersController');

module.exports = (app, upload) =>{

    app.post('/api/users/create',  userController.register);
    app.post('/api/users/uploadphoto',upload.array('image', 1), userController.photoUpload);
    app.post('/api/users/login', userController.login);

}