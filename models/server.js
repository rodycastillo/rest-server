const express = require('express')
const cors = require('cors')

class Server {

    constructor() {
        this.app = express()
        this.port = process.env.PORT
        this.usersPath = '/api/usuarios'

        //Middleware: Se ejecuta cuando levantamos el servidor
        this.middlewares()

        //Routes for my app
        this.routes()
    }

    middlewares() {
        //Index.html
        this.app.use(express.static('public'))
        //CORS
        this.app.use(cors())
        //Parsing of body
        this.app.use(express.json())
    }

    routes() {
        this.app.use(this.usersPath, require('../routes/user'))
    }

    listen() {
        this.app.listen(this.port, () => {
            console.log('LocalHost:', this.port);
        })
    }

}

module.exports = Server;