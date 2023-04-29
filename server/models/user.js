const db = require('../config/config');
const bcryptjs = require('bcryptjs')

const User = {};

User.findById = (id, result) =>{

    const sql = `
    SELECT
        id, 
        email,
        name,
        lastName,
        image,
        password
    FROM
        users
    WHERE
        id = ? 
    `;

    db.query(
        sql,
        [id],
        (err, user) =>{
            if (err){
                console.log('ERROR:', err);
                console.log(err, null)
            }
            else{
                console.log('Id del nuevo usuario: ', user);
                result(null, user);
            }
        }
        
    )

}

User.findByEmail = (email, result) =>{

    const sql = `
    SELECT
        id, 
        email,
        name,
        lastName,
        image,
        password
    FROM
        users
    WHERE
        email = ? 
    `;

    db.query(
        sql,
        [email],
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

User.create = async (user, result) =>{

    const hash = await bcryptjs.hash(user.password, 10);

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
            hash,
            new Date(),
            new Date()
        ],
        (err, user) =>{
            if (err){
                console.log('ERROR:', err);
            }
            else{
                console.log('USUARUIO:: ', user);
                result(null, user);
            }
        }
    )

}

module.exports = User;
