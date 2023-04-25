const mysql = require('mysql');

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'colores8Q',
    database: 'arithmo_app', 
    port: 3306

});

db.connect(function(err){
    if (err) throw err;
    console.log('Database connected!');

});

module.exports = db;