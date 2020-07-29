const mongoose = require("mongoose")
const Schema= mongoose.Schema


const albumSchema = Schema({
 title: String,
 description: String,
 year: Number,
 image: String,
 _id_artist: {type: Schema.ObjectId, ref: "artist"}
 
})

module.exports= mongoose.model("album", albumSchema)