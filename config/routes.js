const router = require("express").Router();

const homeController = require("../controllers/homeController");
const cubeController = require("../controllers/cubeController");
const accessoryController = require("../controllers/accessoryController");
const authController = require("../controllers/authController");
const {authMiddleware} = require("../utils/authUtils")

router.get("/", homeController.getHomeView)
router.post("/", homeController.postSearchEngine)

router.get("/about", homeController.getAboutView)

router.get("/cubes/:cubeId/details", cubeController.getDetails)

router.get("/cubes/:cubeId/edit",authMiddleware ,cubeController.getEditView)
router.post("/cubes/:cubeId/edit",authMiddleware ,cubeController.postEditCube)

router.get("/cubes/add-cube", authMiddleware ,cubeController.getAddCude)
router.post("/cubes/add-cube", authMiddleware ,cubeController.postAddCube)

router.get("/cubes/:cubeId/delete",authMiddleware ,cubeController.getDeleteView)
router.post("/cubes/:cubeId/delete",authMiddleware ,cubeController.postDeleteCube)

router.get("/404", homeController.get404View)

router.get("/accessories/add-accessory",authMiddleware, accessoryController.getAddAccessoryView)
router.post("/accessories/add-accessory",authMiddleware, accessoryController.postCreateAccessory)

router.get("/cubes/:cubeId/attach",authMiddleware, accessoryController.getAttachAccessoryView)
router.post("/cubes/:cubeId/attach",authMiddleware, accessoryController.postAttachAccessory)

router.get("/auth/register", authController.getRegisterView)
router.post("/auth/register", authController.postRegister)

router.get("/auth/login", authController.getLoginView)
router.post("/auth/login", authController.postLogin)

router.get("/auth/logout",authMiddleware, authController.getLogout)

module.exports = router