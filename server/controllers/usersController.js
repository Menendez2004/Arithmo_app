const User = require("../models/user");
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken');
const keys = require('../config/keys');

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

            if (!myUser ) {
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
                    name: myUser.name,
                    lastName: myUser.lastName,
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
