const Cube = require("../models/Cube");

// exports.searchByWordCubes = async (word) => await Cube.find({ $strcasecmp: [Cube.name, word]}).lean();

exports.searchByDiffFromCubes = async (diffFrom) => await Cube.find({difficultyLevel: {$lte: diffFrom}}).lean();

exports.searchByDiffToCubes = async (diffTo) => await Cube.find({difficultyLevel: {$gte: diffTo}}).lean();

exports.getAllCubes = async() => await Cube.find().lean()

exports.getOneCube = async(cubeId) => await Cube.findById(cubeId).populate("accessories").lean()

exports.getOneCubeWithAccessories = async(cubeId) => await Cube.findById(cubeId)

exports.createCube = async(name, description, imageUrl, difficultyLevel, userId) => await Cube.create({name, description, imageUrl, difficultyLevel, userId})

exports.editCube = async(name, description, imageUrl, difficultyLevel, cubeId, userId) => await Cube.findByIdAndUpdate(cubeId, {name, description, imageUrl, difficultyLevel, userId})

exports.deleteCube = async(cubeId) => await Cube.deleteOne({_id: cubeId})