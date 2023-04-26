const User = require("../models/user");

module.exports = {
    register(req, res) {
        const user = req.body; //Datos del usuario
        User.create(user, (err, data) => {
            if (err) {
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
