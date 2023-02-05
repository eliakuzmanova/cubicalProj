
const cubeService = require("../services/cubesService");

exports.getHomeView = async (req,res) => {
 const cubes = await cubeService.getCubes()
    res.render("home", {cubes});

}