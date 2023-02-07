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

exports.postLogin = async (req, res) => {
    const {username, password} = req.body;
  const user = await authService.findOneUser(username);

  if(!user) {
    res.render("404")
  }

  const isValid = await authUtils.comparePasswords(password, user.password);

  if(!isValid) {
    res.render("404")
  }

  const payload = {username};
  const options = {expiresIn: "2h"};

  const token  = authUtils.token(payload, options);
  res.cookie("auth", token, {httpOnly: true});
  res.redirect("/")
}


// exports.getLogout = (req, res) => {

// }