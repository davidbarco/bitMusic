const express= require("express");
const Usercontroller=require("../controllers/user")

const api = express.Router()

api.get("/probando-controlador", Usercontroller.pruebas)

module.exports= api;