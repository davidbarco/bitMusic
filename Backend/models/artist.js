const mongoose = require("mongoose")
const Schema= mongoose.Schema


const artistSchema = Schema({
 firtsName: String,
 descripcion: String,
 image: String,
})

module.exports= mongoose.model("artist", artistSchema)