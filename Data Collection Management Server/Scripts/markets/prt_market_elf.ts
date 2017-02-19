import yql = require('./../yql/yql');
import mongo = require('./../mongodb/mongodb')


var market_elf = function () { }
market_elf.prototype.active = true
market_elf.prototype.run = function () {
    console.log('Market ' + this.symbol + ' is active')

    var symbol = this.symbol
    var lastDataset = new Date()

    // 1 SEGUNDO
    setInterval(function () {

        //console.log(this.active)
        yql.getRealtimePrice(symbol, function (response) {

            if (response.realtime_ts != lastDataset) {
                mongo.insertDataset(response)
                console.log(response.Name + ' - New dataset saved') 
                lastDataset = response.realtime_ts
            }
        })

    }, 1000);
}



export var CreateMarket = function (s) {
    var market = new market_elf()
    market.symbol = s
    market.run()
    return market
}







//var dataset = yql.getRealtimePrice(this.symbol);