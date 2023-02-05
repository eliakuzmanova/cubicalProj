const router = require("express").Router();

const homeController = require("../controllers/homeController");

router.get("/", homeController.getHomeView)


module.exports = router