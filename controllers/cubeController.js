//add it to routes
const cubeUtils = require("../utils/cubeUtils");
const cubeService = require("../services/cubesService");
const authUtils = require("../utils/authUtils");

exports.getDetails = async (req,res) => {
    const cube = await cubeService.getOneCube(req.params.cubeId)
    res.render("cube/details", {cube}) 
};

exports.getAddCude = (req,res) => {
    res.render("cube/addCube")
};

exports.postAddCube = async (req,res) => {
    const {name, description, imageUrl, difficultyLevel} = req.body;

    await cubeService.createCube(name, description, imageUrl, difficultyLevel, req.cookies[userId])
    res.redirect("/")
};

exports.getEditView = async (req, res) => {
    const cube = await cubeService.getOneCube(req.params.cubeId)
    const difficultyLevels = cubeUtils.generateDifficultyLevels(cube.difficultyLevel)
    res.render("cube/edit", {cube, difficultyLevels})

};

exports.postEditCube = async (req, res) => {
    const cubeId = req.params.cubeId
    const {name, description, imageUrl, difficultyLevel} = req.body;
    await cubeService.editCube(name, description, imageUrl, difficultyLevel, cubeId, req.cookies[userId])
    res.redirect(`/cubes/${cubeId}/details`)

}

exports.getDeleteView = async (req, res) => {
    const cube = await cubeService.getOneCube(req.params.cubeId)
    const difficultyLevels = cubeUtils.generateDifficultyLevels(cube.difficultyLevel)
    res.render("cube/delete", {cube, difficultyLevels})
}

exports.postDeleteCube = async (req, res) => {
    const cubeId = req.params.cubeId
    await cubeService.deleteCube(cubeId)
    res.redirect("/")

}