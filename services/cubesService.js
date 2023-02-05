const Cube = require("../models/Cube");

exports.getAllCubes = async() => await Cube.find().lean()

exports.getOneCube = async(cubeId) => await Cube.findById(cubeId).lean()

exports.createCube = async(name, description, imageUrl, difficultyLevel) => await Cube.create({name, description, imageUrl, difficultyLevel})