module.exports = function (app, databaseService){
    
    app.get("/", (req, res) => {
        res.status(200).json({"message": "Todo good"})
    })

    
    app.get("/lenguajes", (req, res) =>{

        databaseService.leerLenguajes()
            .then(lenguajes => {
                res.status(200).json(lenguajes)
            }).catch(e => {
                res.status(500).json({"Algo falló": e})
            })
        //res.json({"message": "Mis lenguajes"})
    })



    app.post("/lenguajes", (req, res) => {
        const nuevoLenguaje = req.body
        console.log(nuevoLenguaje)

        databaseService.crearLenguaje(nuevoLenguaje)
            .then(() => {
                res.status(200).json({"message": "Lenguaje Añadido con exito"})
            }).catch(e =>{
                res.status(500).json(e)
            })

        

    })

}