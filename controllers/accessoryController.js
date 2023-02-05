
const accessoryService = require("../services/accessoryService")

exports.getAddAccessoryView = async (req, res) => {

    res.render("accessory/create")
}

exports.postCreateAccessory = async (req, res) => {
    const {name, description, imageUrl} = req.body;
    await accessoryService.createAccessory(name, description, imageUrl)
    res.redirect("/")
}