"use strict";
const mongodb_config = require('./mongodb_config');
const queries = require('./mongodb_queries');
// almacena la conexión con la base de datos
var db;
var callback = function (response) {
    return response;
};
// conexión a base de datos y configuración de schemas
function connect(callback) {
    db = mongodb_config.connect(function (response) {
        db = response;
        console.log('DB devuelta al connectar');
        queries.config(db);
        setTimeout(function () {
            callback(db);
        }, 2000);
    });
}
exports.connect = connect;
// introduce un nuevo dato de mercado
function insertDataset(data) {
    queries.insertDataset(data);
}
exports.insertDataset = insertDataset;
// devuelve el tiempo de la última recogida de datos
function getLastTimeBySymbol(symbol) {
}
exports.getLastTimeBySymbol = getLastTimeBySymbol;
// devuelve el listado de mercados disponibles en la base de datos
function availableMarkets() {
}
exports.availableMarkets = availableMarkets;
//# sourceMappingURL=mongodb.js.map