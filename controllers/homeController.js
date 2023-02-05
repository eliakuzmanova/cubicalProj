
const cubeService = require("../services/cubesService");

exports.getHomeView = async (req,res) => {

 const cubes = await cubeService.getAllCubes()
    res.render("home", {cubes});

}

exports.getAboutView = (req,res) => {
    res.render("about");
}