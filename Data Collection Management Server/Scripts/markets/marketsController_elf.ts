import market_elf = require('./prt_market_elf')
import market_update = require('./marketUpdate_elf')



export function run() {

    var AvailableMarkets = []
    var ActiveMarkets = []

    
    // 3 SEGUNDOS
    setInterval(function () {

        AvailableMarkets = market_update.AvailableMarkets

        AvailableMarkets.forEach(function (item, index) {
            var resp = ActiveMarkets.find(function (aux) {
                return aux.symbol == item.symbol
            })
            if (typeof resp == 'undefined') {
                console.log('New market instantiation: ' + item.symbol)
                var market = market_elf.CreateMarket(item.symbol)
                ActiveMarkets.push(item)

            }
        })
        
    }, 3000);


}