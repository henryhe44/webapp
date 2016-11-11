const passport      = require('passport')
const LocalStrategy = require('passport-local').Strategy
const User          = require('../models').User


passport.use(new LocalStrategy(
  (username, password, done) => {
    console.log('searching')
    User.findOne({
      where: {username}
    }).then((user) => {
      console.log("user: " + user)
      // if user isn't null, check the passwords
      if(user){
        // check passwords
        if(password !== user.password){
          return done(null, false, {message: "Passwords do not match"})
        }
      }else if (user == null){
        return done(null, false, {message: "User does not exist"})
      }
      return done(null, user, {message: "Successfully logged in"})


    })
}))


// Create Session Cookies
passport.serializeUser(
  (user, done) => {
    console.log("serializing user")
    done(null, user.id)
})


// Destroy Session Cookies on Logout
passport.deserializeUser(
  (id, done) =>{
    console.log('deserializing')
    User.findById(id,
      (err, user) => {
        done(err, user)
    })

})


module.exports = passport;
