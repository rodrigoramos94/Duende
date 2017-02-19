"use strict";
const mongoose = require("mongoose");
var path = 'mongodb://localhost/data';
var callback = function (response) {
    return response;
};
function connect(callback) {
    mongoose.connect(path);
    var database = mongoose.connection;
    database.on('error', console.error.bind(console, 'connection error:'));
    database.once('open', function () {
        console.log('Conexión con MongoDB realizada correctamente');
        callback(database);
    });
}
exports.connect = connect;
//# sourceMappingURL=mongodb_config.js.map