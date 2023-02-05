const mongoose = require('mongoose')

const accessorySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true,
        maxLength: 50
    },
    imageUrl: {
        type: String,
        required: true,
        validate: {
            validator: function(value) {
                return value.startsWith("http://") || value.startsWith("https://")
            },
            message: "URL is invalid"
        }

    },
   

})

const Accessory = mongoose.model("Accessory", accessorySchema)

module.exports = Accessory;