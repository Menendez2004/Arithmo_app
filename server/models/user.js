const db = require('../config/config');
const bcryptjs = require('bcryptjs')

const User = {};

User.findById = (id, result) => {

    const sql = `
    SELECT
        id, 
        email,
        name,
        lastName,
        image,
        password,
        edad
    FROM
        users
    WHERE
        id = ? 
    `;

    db.query(
        sql,
        [id],
        (err, user) => {
            if (err) {
                console.log('ERROR:', err);
                console.log(err, null)
            }
            else {
                console.log('USUARIO RECIBIDO : ', user);
                result(null, user);
            }
        }

    )

}

User.findByEmail = (email, result) => {

    const sql = `
    SELECT
        id, 
        email,
        name,
        lastName,
        image,
        password,
        edad
    FROM
        users
    WHERE
        email = ? 
    `;

    db.query(
        sql,
        [email],
        (err, user) => {
            if (err) {
                console.log('ERROR:', err);
            }
            else {
                console.log('Id del nuevo usuario: ', user[0]);
                result(null, user[0]);
            }
        }

    )

}

User.create = async (user, result) => {

    const hash = await bcryptjs.hash(user.password, 10);

    const sql = ` INSERT INTO users(email,name, lastName, image, password, create_at, update_at, edad ) VALUES( ?, ?, ?, ?, ?, ?, ?, ? ) `;

    db.query(
        sql,
        [
            user.email,
            user.name,
            user.lastName,
            user.image,
            hash,
            new Date(),
            new Date(),
            user.edad
        ],
        (err, user) => {
            if (err) {
                console.log('ERROR:', err);
            }
            else {
                console.log('USUARUIO: ', user);
                result(null, user);
            }
        }
    )

};

User.update = async ( user, result) => {
    const sql = `
    UPDATE
        users
    SET
        email =?,
        name =?,
        lastName =?,
        image =?,
        update_at =?,
        edad =?
    Where
        id =?
    `;

    db.query(
        sql,
        [
            user.email,
            user.name,
            user.lastName,
            user.image,
            new Date(),
            user.edad,
            user.id
        ],
        (err, user) => {
            if (err) {
                console.log('ERROR:', err);
            }
            else {
                console.log('USUARUIO ACTUALIZADO: ', user);
                result(null, true);
            }
        }
    )

};

User.updateWithoutImage = async ( user, result) => {
    const sql = `
    UPDATE
        users
    SET
        email =?,
        name =?,
        lastName =?,
        update_at =?,
        edad =?
    Where
        id =?
    `;

    db.query(
        sql,
        [
            user.email,
            user.name,
            user.lastName,
            new Date(),
            user.edad,
            user.id
        ],
        (err, user) => {
            if (err) {
                console.log('ERROR:', err);
            }
            else {
                console.log('USUARUIO ACTUALIZADO: ', user);
                result(null, true);
            }
        }
    )

}

module.exports = User;
