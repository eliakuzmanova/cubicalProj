const router = require("express").Router();

const homeController = require("../controllers/homeController");
const cubeController = require("../controllers/cubeController");

router.get("/", homeController.getHomeView)
router.get("/about", homeController.getAboutView)

router.get("/:cubeId/details", cubeController.getDetails)

router.get("/add-cube", cubeController.getAddCude)
router.post("/add-cube", cubeController.postAddCube)


module.exports = router