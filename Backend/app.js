const express= require("express")
const bodyParser=require("body-parser")

const app= express()


//rutas  aqui se pueden configurar varias rutas
const user_routes= require("./routes/user")

app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())


//middleware  aqui se pueden configurar variar rutas

app.use("/api", user_routes)



/* app.get("/pruebas", (req, res)=> {
  res.status(200).send({message: "está conectada nuestra API"})
    
}) */

/* app.get("/hola", (req, res)=> {      
    res.status(200).send({message: "estas conectado a hola"})
      
  }) */

module.exports= app;