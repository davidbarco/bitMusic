const mongoose= require("mongoose"); //requerimos
const app= require("./app");
const port= 3000;  



mongoose.connect("mongodb://localhost:27017/bitMusic", (err, res)=>{
if(err){
    console.log("no nos pudimos conectar");

}else{
    console.log("la base de datos está corriendo ok");
    app.listen(port, ()=>{
        console.log("el demonio está vigilando en el puerto" + port)
    })
}

})  //puerto por defecto
