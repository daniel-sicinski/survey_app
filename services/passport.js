const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const keys = require('../config/keys');

passport.use( new GoogleStrategy({
    clientID: keys.clientID,
    clientSecret: keys.clientSecret,
    callbackURL: '/auth/google/callback'
},
    token => {
        console.log(token)
    }
));