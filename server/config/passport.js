const JwStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require = ('passport-jwt').ExtractJwt;
const keys = require('./keys');
const User = require('../models/user');

module.exports = (passport) => {
    let opt = {};
    opt.jwFromRequest = ExtractJwt.fromAuthHeaderWithScheme('jwt');
    opt.secretOrkey = keys.secretOrkey;

    passport.use(new JwStrategy(opt, (jwt_payload, done) => {
        User.findById({ id: jwt_payload.id }, (err, user) => {
            if (err) {
                return done(err, false);
            }
            if (user) {
                return done(null, user);
            } else {
                return done(null, false);
            }
        });
    }));
}