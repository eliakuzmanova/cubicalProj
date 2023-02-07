const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")
const secret = "mySecretWord"


exports.hashPassword = (password) => bcrypt.hash(password, 10)

exports.comparePasswords = (plainPass, hash) => bcrypt.compare(plainPass, hash);

exports.token = (payload, options) => jwt.sign(payload, secret, options)

exports.authentication = (req, res, next) => {
    
    const token = req.cookies.auth
    if (token) {
       try{
        const decodedToken = jwt.verify(token, secret)

        req.user = decodedToken
        req.isAuthenticated = true;

        res.locals.username = decodedToken.username
        res.locals.isAuthenticated = true;
       } catch(err){
        console.log(err.message);
        res.clearCookie("auth");
        res.redirect("/404")
       }
    } 

    next()

}

exports.authMiddleware = (req, res, next) => {
    if(!req.isAuthenticated) {
        res.redirect("/404")
    }

    res.locals.isAuthenticated = true;

    next()
}