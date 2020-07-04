const JwTStrategy = require('passport-jwt').Strategy
const ExtractJwt = require('passport-jwt').ExtractJwt

const fs = require('fs')
const User = require('../models/User')

const PUB_KEY = fs.readFileSync("../id_rsa_pub.pem'")
const options = {
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: PUB_KEY,
    algorithms: ['RS256']
}

const strategy = new JwTStrategy(options, (payload, done) => {
    User.findOne({_id: payload.sub})
        .then((user) => {
            if (user) {
                return done(null, user)
            } else {
                return done(null, false)
            }
        })
        .catch(err => done(err, null))
})

module.exports = (passport) => {
    passport.use(strategy)
}