const router = require("express").Router();

const homeController = require("../controllers/homeController");
const cubeController = require("../controllers/cubeController");

router.get("/", homeController.getHomeView)

router.get("/:cubeId/details", cubeController.getDetails)


module.exports = router