require("dotenv").config()

const express = require("express")
const bodyParser = require("body-parser")
const {databaseService} = require("./services/databaseService")
const app = express()
app.use(bodyParser.json())
const port = 3000
require("./routes")(app, databaseService())



app.listen(port, ()=> {
    console.log(`Escuchando en el puerto ${port}`)
}) 
