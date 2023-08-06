const databaseService = () => {

    const knex = require("knex")({
        client: "mysql2",
        connection: {
            host: process.env.DB_HOST,
            port: 3306,
            user: process.env.DB_USER,
            password: process.env.DB_PASS,
            database: process.env.DB,
        }
    })

    const table = "mis_lenguajes"

    const leerLenguajes = () => {
        return knex(table).select()
    }

    const crearLenguaje = ({nombre, lanzamiento, tipado_fuerte}) => {
        return knex(table).insert({
            nombre: nombre,
            lanzamiento: lanzamiento,
            tipado_fuerte: tipado_fuerte
        }) //return a promise
    }

    return {
        crearLenguaje,
        leerLenguajes
    }
}

module.exports  = {
    databaseService,
    
}