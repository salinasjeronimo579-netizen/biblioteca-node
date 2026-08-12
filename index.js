import { conn } from "./src/config/database.js";
import express from "express"
import { HOST_SERVER, PORT_SERVER } from "./src/config/credentials.js";

const app = express()
app.listen(PORT_SERVER, ()=>{
    console.log(`Servidor funcionando de forma correcta en el puerto ${PORT_SERVER} y la URL es ${HOST_SERVER + PORT_SERVER}`)
})

conn.authenticate()
.then(()=>{
    console.log("conexión exitosa a la base de datos...")
})
.catch((error)=>{
    console.log("Error de conexión a la base de datos: " + error.message);
    
});