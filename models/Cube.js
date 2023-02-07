const mongoose = require('mongoose')

const cubeSchema = new mongoose.Schema({
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
    difficultyLevel: {
        type: Number,
        required: true,
        min: 1,
        max: 6
    },

    accessories: [{
        type: mongoose.Types.ObjectId,
        ref: "Accessory"
    }],

    owner: {
        type: String,
        required: true
    }
})

const Cube = mongoose.model("Cube", cubeSchema)

module.exports = Cube;