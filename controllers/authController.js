const authUtils = require("../utils/authUtils");
const authService = require("../services/authService");

exports.getRegisterView = (req, res) => {
    res.render("auth/register")
}

exports.postRegister = async (req, res) => {

    const {username, password, repeatPassword} = req.body;

    if (password !== repeatPassword) {
        res.render("404")
    }

    const isValidate = await authService.findOneUser(username)
    
    if(isValidate) {
        res.render("404")
    }


    const hashedPassword = await authUtils.hashPassword(password);

   await authService.register(username, hashedPassword);

    res.render("auth/login");
}

exports.getLoginView = (req, res) => {
    res.render("auth/login")
}

// exports.postLogin = (req, res) => {

// }

// exports.getLogout = (req, res) => {

// }