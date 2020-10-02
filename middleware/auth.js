// to check that user is directed to correct route when logged in/out
// middleware is a function that has access to the request and response objects
module.exports = {
	ensureAuth: function(req, res, next){
		if(req.isAuthenticated()){
			return next()
		} else {
			res.redirect('/')
		}
	},
	ensureGuest: function (req, res, next) {
		if(req.isAuthenticated()){
			res.redirect('/dashboard')
		} else {
			return next()
		}
	}
}
