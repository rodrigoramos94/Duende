import mongodb = require('./Scripts/mongodb/mongodb')
import market_update = require('./Scripts/markets/marketUpdate_elf')
import markets_controller = require('./Scripts/markets/marketsController_elf')
import yql = require('./Scripts/yql/yql');

console.log('/////Iniciando Servidor: Data Collection Management Server (DCMS)')

// conexion con MongoDB
console.log('/////Iniciando MongoDB')
mongodb.connect(function (response) {

    console.log('Ejecutando Servidor (DCMS)')

    // INICIAMOS EL CONTROLADOR DE MERCADOS
    markets_controller.run()
})

