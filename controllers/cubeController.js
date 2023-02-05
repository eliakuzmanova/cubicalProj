//add it to routes

const cubeService = require("../services/cubesService");

exports.getDetails = async (req,res) => {
    const cube = await cubeService.getOneCube(req.params.cubeId)
    res.render("cube/details", {cube})
}