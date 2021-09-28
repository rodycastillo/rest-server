const express = require('express')

class Server {

    constructor() {
        this.app = express()
        this.port = process.env.PORT

        //Middleware: Se ejecuta cuando levantamos el servidor
        this.middlewares()
        //Routes for my app
        this.routes()
    }

    middlewares() {
        this.app.use(express.static('public'))
    }

    routes() {
        


        this.app.get('/',  (req, res) => {
            res.send('Hello World')
          })
    }

    listen() {
        this.app.listen(this.port, () => {
            console.log('LocalHost:', this.port);
        })
    }

}

module.exports = Server;