const db = require('../config/config');

const User = {};

User.create = (user, result) =>{
    const sql = `
        INSERT INTO
            users(
                email,
                name,
                lastName,
                image,
                password, 
                create_at,
                update_at
            )
        VALUES(?, ?, ?, ?, ?, ?, ? )

    `;

    db.query
    (
        sql,
        [
            user.email,
            user.name,
            user.lastName,
            user.image,
            user.password,
            new Date(),
            new Date()
        ],
        (err, res) =>{
            if (err){
                console.log('ERROR:', err);
            }
            else{
                console.log('Id del nuevo usuario: ', res.insertId);
                result(null, res.insertId);
            }
        }
    )

}

module.exports = User;
