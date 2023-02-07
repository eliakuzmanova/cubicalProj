const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")
const secret = "mySecretWord"


exports.hashPassword = (password) => bcrypt.hash(password, 10)

exports.comparePasswords = (plainPass, hash) => bcrypt.compare(plainPass, hash);

exports.token = (payload, options) => jwt.sign(payload, secret, options)

exports.isAuthenticated = (token, res) => {
    if (!token) {
        res.redirect("/404")
    }

    return decodedToken = jwt.verify(token, secret)

}