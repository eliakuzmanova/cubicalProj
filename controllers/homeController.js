
const cubeService = require("../services/cubesService");
const authUtils = require("../utils/authUtils");

exports.getHomeView = async (req,res) => {
        req.locals = authUtils.isAuthenticated
        const cubes = await cubeService.getAllCubes()

    res.render("home", {cubes});
}

exports.postSearchEngine = async (req, res) => {
    
    const {search, from, to} = req.body;

    let cubes;

    //must seach the search case insensitive

    // if (search) {
    //     cubes = await cubeService.searchByWordCubes(search)  
    // }

    if (from) {
        cubes = await cubeService.searchByDiffFromCubes(from)
    }

    if (to) {
        cubes = await cubeService.searchByDiffToCubes(to)
    }

    res.render("home", {cubes, search, from, to});

}

exports.getAboutView = (req,res) => {
    res.render("about");
}

exports.get404View = (req,res) => {
    res.render("404");
}