import mongoose = require('mongoose');
import mongodb_config = require('./mongodb_config')
import queries = require('./mongodb_queries')


// almacena la conexión con la base de datos
var db
var callback = function (response) {
    return response
}

// conexión a base de datos y configuración de schemas
export function connect(callback) {
    db = mongodb_config.connect(function (response) {
        db = response
        console.log('DB devuelta al connectar')
        queries.config(db)

        setTimeout(function () {
            callback(db)
        }, 2000);
        
    })
    
}

// introduce un nuevo dato de mercado
export function insertDataset(data) {
    queries.insertDataset(data)
}



// devuelve el tiempo de la última recogida de datos
export function getLastTimeBySymbol(symbol) {
    
}

// devuelve el listado de mercados disponibles en la base de datos
export function availableMarkets() {
    
}
