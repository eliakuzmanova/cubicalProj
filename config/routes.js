const router = require("express").Router();

const homeController = require("../controllers/homeController");
const cubeController = require("../controllers/cubeController");

router.get("/", homeController.getHomeView)
router.get("/about", homeController.getAboutView)

router.get("/cubes/:cubeId/details", cubeController.getDetails)

router.get("/cubes/:cubeId/edit", cubeController.getEditView)
router.post("/cubes/:cubeId/edit", cubeController.postEditCube)

router.get("/cubes/add-cube", cubeController.getAddCude)
router.post("/cubes/add-cube", cubeController.postAddCube)

router.get("/cubes/:cubeId/delete", cubeController.getDeleteView)
router.post("/cubes/:cubeId/delete", cubeController.postDeleteCube)

router.get("/404", homeController.get404View)


module.exports = router