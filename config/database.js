const mongoose = require('mongoose');

const uri = "mongodb://localhost:27017/cubicle"

async function initDatabase() {

    await mongoose.connect(uri)
    console.log("DB connected")
}

module.exports = initDatabase