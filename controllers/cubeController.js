//add it to routes

const cubeService = require("../services/cubesService");

exports.getDetails = async (req,res) => {
    const cube = await cubeService.getOneCube(req.params.cubeId)
    res.render("cube/details", {cube})
};

exports.getAddCude = (req,res) => {
    res.render("cube/addCube")
};

exports.postAddCube = async (req,res) => {
    const {name, description, imageUrl, difficultyLevel} = req.body;
    await cubeService.createCube(name, description, imageUrl, difficultyLevel)
    res.redirect("/")
};
