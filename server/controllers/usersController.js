const User = require("../models/user");
const bcryptjs = require('bcryptjs')
const jwt = require('jsonwebtoken');
const tokens = require('../config/tokens');

module.exports = {

    login(req, res){

        const email = req.body.email;
        const password = req.body.password;

        User.findByEmail(email, async (err, data) => {
            if (err) {
                console.log('ENTRO EN EL ERROR');
                return res.status(501).json({
                    success: false,
                    message: "Error con el registro de usuario",
                    error: err,
                });
            }

            if (!data){
                //No auth
                onsole.log('ENTRO EN EL ERROR');
                return res.status(401).json({
                    success: false,
                    message: "email no encotrad",
                });
            }

            const isPassValid = await bcrypt.compare(password, data.password);

            if(isPassValid){
                const token = jwt.sign({id:data.id, email: data.email}, keys.secretOrkey,{});
                
            }

            return res.status(201).json({
                success: true,
                message: "Registro realizado correctamente",
                data: data, //El nuevo usuario que se acaba de registrar
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
