import mongoose = require('mongoose')


export function connect() {
    mongoose.connect('mongodb://localhost/data');
    var db = mongoose.connection;
    db.on('error', console.error.bind(console, 'connection error:'));
    db.once('open', function () {
        console.log('Conexión con MongoDB realizada correctamente')
    });
}
