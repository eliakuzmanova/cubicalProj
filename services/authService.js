const  User = require("../models/User");

exports.register = async (username, password) => await User.create({username, password})

exports.findOneUser = async(username) => await User.findOne({username});