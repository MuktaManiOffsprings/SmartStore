const GoogleStrategy = require('passport-google-oauth20').Strategy;
const passport = require("passport");

const GOOGLE_CLIENT_ID = "601184661807-ra282u96579kse7466hc2pb3h1ndbbea.apps.googleusercontent.com"
const GOOGLE_CLIENT_SECRET = "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"

passport.use(new GoogleStrategy({
    clientID: GOOGLE_CLIENT_ID,
    clientSecret: GOOGLE_CLIENT_SECRET,
    callbackURL: "/authorised/google/callback"
},
    function (accessToken, refreshToken, profile, done) {
        done(null, profile)
    }
));

passport.serializeUser((user, done) => {
    done(null,user)
})

passport.deserializeUser((user, done) => {
    done(null, user)
})