const Cube = require("../models/Cube");

exports.getCubes = async() => await Cube.find().lean()