const mongoose = require("mongoose")
const Schema= mongoose.Schema


const songSchema = Schema({
 number: Number,
 name: String,
 duration: String,
 file: String,
 _id_album: {type: Schema.ObjectId, ref: "album"}
})

module.exports= mongoose.model("song", songSchema)