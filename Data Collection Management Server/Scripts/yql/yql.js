"use strict";
const yql = require('yql-auth');
const querycreator = require('./yql-querycreator');
yql.options({
    OAuth: {
        ID: 'dj0yJmk9b1hGR01oM0RmdnRLJmQ9WVdrOWVUaDJPSHBhTTJNbWNHbzlNQS0tJnM9Y29uc3VtZXJzZWNyZXQmeD0xNQ--',
        Secret: 'd96b15d94b3e3067847783adcbee9c385a06f9b6'
    },
    format: 'json'
});
var callback = function (response) {
    return response;
};
function getRealtimePrice(symbol, callback) {
    var q = querycreator.getRealtimePrice(symbol);
    yql.query(q).then(function (response) {
        var dataset = JSON.parse(response).query.results.quote;
        //console.dir(dataset.Name + " - " + dataset.realtime_price)
        callback(dataset);
    }).catch(function (error) {
        console.error(error);
    });
}
exports.getRealtimePrice = getRealtimePrice;
//# sourceMappingURL=yql.js.map