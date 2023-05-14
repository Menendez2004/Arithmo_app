const User = require("../models/user");
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken');
const keys = require('../config/keys');
const storage = require('../utils/cloud_storage')

module.exports = {

    login(req, res) {

        const email = req.body.email;
        const password = req.body.password;

        User.findByEmail(email, async (err, myUser) => {

            if (err) {
                console.log('ENTRO EN EL ERROR');
                return res.status(501).json({
                    success: false,
                    message: "Error con el registro de usuario",
                    error: err,
                });
            }

            if (!myUser) {
                //No auth
                console.log('ENTRO EN EL ERROR');
                return res.status(401).json({//no tiene autorizacion el usuario
                    success: false,
                    message: "El email no esta registrado",
                });
            }

            const isPassValid = await bcrypt.compare(password, myUser.password);


            if (isPassValid) {
                const token = jwt.sign({ id: myUser.id, email: myUser.email }, keys.secretOrKey, {});
                const data = {
                    id: myUser.id,
                    email: myUser.email,
                    password: myUser.password,
                    image: myUser.image,
                    session_token: `JWT ${token}`
                };

                return res.status(201).json({
                    success: true,
                    message: "Usuario autentificado ",
                    data: data //El nuevo usuario que se acaba de registrar
                });

            }
            else {

                return res.status(401).json({
                    success: false,
                    message: "password incorrecto ",
                });
            }

        });
    },

    async registerWithImage(req, res) {

        const user = JSON.parse(req.body.user); // CAPTURO LOS DATOS QUE ME ENVIE EL CLIENTE

        const files = req.files;

        if (files.length > 0) {
            const path = `image_${Date.now()}`;
            const url = await storage(files[0], path);

            if (url != undefined && url != null) {
                user.image = url;
            }
        }

        User.create(user, (err, data) => {

            if (err) {
                return res.status(501).json({
                    success: false,
                    message: 'Hubo un error con el registro del usuario',
                    error: err
                });
            }


            user.id = `${data}`;
            const token = jwt.sign({ id: user.id, email: user.email }, keys.secretOrKey, {});
            user.session_token = `JWT ${token}`;

            return res.status(201).json({
                success: true,
                message: 'El registro se realizo correctamente',
                data: user
            });
        });

    },

    register(req, res) {
        const user = req.body; //Datos del usuario
        User.create(user, (err, data) => {
            if (err) {
                console.log('ENTRO EN EL ERROR');
                return res.status(501).json({
                    success: false,
                    message: "Error con el registro de usuario",
                    error: err,
                });
            }

            return res.status(201).json({
                success: true,
                message: "Registro realizado correctamente",
                data: data, //El nuevo usuario que se acaba de registrar
            });
        });
    },
};
