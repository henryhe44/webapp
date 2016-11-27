'use strict'
const redirect = {}


// redirect.Redirect.ifNotLoggedIn = function(route = '/login'){
//     (req, res, next) => {
//       if (req.isAuthenticated())
//         return next()
//       res.redirect(route)
//     }
// }
redirect.ifNotLoggedIn = (route) =>
  (req, res, next) => (req.isAuthenticated() ?  next() : res.redirect(route))

redirect.ifLoggedIn = (route) =>
  (req, res, next) => (req.isAuthenticated() ?  res.redirect(route) : next() )
module.exports = redirect
