"use strict";
const mongodb = require('./Scripts/mongodb/mongodb');
const markets_controller = require('./Scripts/markets/marketsController_elf');
console.log('/////Iniciando Servidor: Data Collection Management Server (DCMS)');
// conexion con MongoDB
console.log('/////Iniciando MongoDB');
mongodb.connect(function (response) {
    console.log('Ejecutando Servidor (DCMS)');
    // INICIAMOS EL CONTROLADOR DE MERCADOS
    markets_controller.run();
});
//# sourceMappingURL=app.js.map