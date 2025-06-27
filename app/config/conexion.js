const mongoose = require('mongoose') //Importamos mongoose
const config = require('./configuracion')

module.exports = {
    conection : null,
    connect: ()=> {
        if(this.conection) return this.conection
        return mongoose.connect(config.DB)
        .then(conn => {
            this.conection = conn
            console.log('La conexión se realizó con exito')
        })
        .catch(e => console.log('error en la conexión',e))
    }
}
