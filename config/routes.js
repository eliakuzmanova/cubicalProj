const router = require("express").Router();

const homeController = require("../controllers/homeController");
const cubeController = require("../controllers/cubeController");
const accessoryController = require("../controllers/accessoryController");
const authController = require("../controllers/authController");

router.get("/", homeController.getHomeView)
router.post("/", homeController.postSearchEngine)

router.get("/about", homeController.getAboutView)

router.get("/cubes/:cubeId/details", cubeController.getDetails)

router.get("/cubes/:cubeId/edit", cubeController.getEditView)
router.post("/cubes/:cubeId/edit", cubeController.postEditCube)

router.get("/cubes/add-cube", cubeController.getAddCude)
router.post("/cubes/add-cube", cubeController.postAddCube)

router.get("/cubes/:cubeId/delete", cubeController.getDeleteView)
router.post("/cubes/:cubeId/delete", cubeController.postDeleteCube)

router.get("/404", homeController.get404View)

router.get("/accessories/add-accessory", accessoryController.getAddAccessoryView)
router.post("/accessories/add-accessory", accessoryController.postCreateAccessory)

router.get("/cubes/:cubeId/attach", accessoryController.getAttachAccessoryView)
router.post("/cubes/:cubeId/attach", accessoryController.postAttachAccessory)

router.get("/auth/register", authController.getRegisterView)
router.post("/auth/register", authController.postRegister)

router.get("/auth/login", authController.getLoginView)
router.post("/auth/login", authController.postLogin)

// router.get("/auth/logout", authController.getLogout)

module.exports = router