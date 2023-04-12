const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const mongoose = require('mongoose');
const users = mongoose.model('users');

passport.use(new LocalStrategy(
    // Set property to be used as username
    { usernameField: 'email' },

    // Passport function for user validation
    async (username, password, done) => {
        try {
            const user = await users.findOne({ email: username });

            //fail upon no matching user to e-mail
            if(!user) {
                return done(null, false, { message: 'Unrecognized username' });
            }

            // Password test
            if(!user.validatePassword(password)) {
                return done(null, false, { message: 'Incorrect password' });
            }

            // log in after all checks passed
            return done(null, user);
        } catch (e) {
            return done(e);
        }
    }
))