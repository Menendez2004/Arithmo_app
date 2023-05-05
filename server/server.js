const express = require("express");
const app = express();
const http = require("http");
const server = http.createServer(app);
const logger = require("morgan");
const cors = require("cors");
const passport = require('passport')

/*
 *Import Routes
 */
    const userRoutes = require("./routes/userRoutes");

    const port = process.env.PORT || 3000;

    app.use(logger("dev"));
    app.use(express.json());
    app.use(express.urlencoded({
        extended: true,
    })
);

    app.use(cors());
    app.use(passport.initialize());
    app.use(passport.session());

    require('./config/passport')(passport);

    app.disable("x-powered-by");

    app.set("port", port);

//Calling Route

    userRoutes(app);

server.listen(3000, '192.168.1.2' || 'localhost', function(){
    console.log('Node aplication ' + process.pid + ' iniciada');
});

    app.get("/", (req, res) => {
        res.send("Ruta principal del backend");
});

// app.get('/test', (req, res) =>{
//     res.send('Testing route');
// });

//Capturador del error
    app.use((err, req, res, next) => {
        console.log(err);
        res.status(err.status || 500).send(err.stack);
});
