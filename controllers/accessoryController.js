const Accessory = require("../models/Accessory");
const accessoryService = require("../services/accessoryService")
const cubeService = require("../services/cubesService");
const authUtils = require("../utils/authUtils");

exports.getAddAccessoryView = async (req, res) => {

    res.render("accessory/create")
}

exports.postCreateAccessory = async (req, res) => {
    const {name, description, imageUrl} = req.body;
    await accessoryService.createAccessory(name, description, imageUrl)
    res.redirect("/")
}

exports.getAttachAccessoryView = async (req, res) => {
    const cube = await cubeService.getOneCube(req.params.cubeId)
    const accessories = await Accessory.find({_id: {$nin: cube.accessories}}).lean()


    res.render("accessory/attach", {cube, accessories})

}


exports.postAttachAccessory = async (req, res) => {
    const cube = await cubeService.getOneCubeWithAccessories(req.params.cubeId)
    const accessoryId  = req.body.accessory
    
    cube.accessories.push(accessoryId)
   await cube.save()

    res.redirect(`/cubes/${cube._id}/details`)
}