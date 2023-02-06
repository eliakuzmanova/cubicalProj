const Accessory = require("../models/Accessory");

exports.createAccessory = async(name, description, imageUrl) => await Accessory.create({name, description, imageUrl})

exports.getAllAccessories = async() => await Accessory.find().lean()

exports.getAccessoryById = async(id) => await Accessory.findById(id).lean()