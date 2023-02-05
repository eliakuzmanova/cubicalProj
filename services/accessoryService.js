const Accessory = require("../models/Accessory");

exports.createAccessory = async(name, description, imageUrl) => await Accessory.create({name, description, imageUrl})