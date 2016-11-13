const passport      = require('passport')
const LocalStrategy = require('passport-local').Strategy
const User          = require('../models').User


passport.use(new LocalStrategy(
  (username, password, done) => {
    User.findOne({
      username: username
    }).then((user) => {
      // user doesn't exist
      if (!user) {
        return done(null, false, {message: "User does not exist"})
      // user exists; check password
      }else if (user.password !== password) {
        return done(null, false, {message: "Passwords do not match"})
      // user exists + password is correct
      }else {
        return done(null, user, {message: "Successfully logged in"})
      }

    })
}))

// Saves user.id as the key to the whole user for this session
passport.serializeUser(
  (user, done) => {
    console.log("serializing user")
    done(null, user.id)
})

// Retrieves the whole user using the user.id key
passport.deserializeUser(
  (id, done) =>{
    console.log('deserializing')
    User.findById(id)
      .then((user) => {
        done(null, user)
      })
  }
)

module.exports = passport;
