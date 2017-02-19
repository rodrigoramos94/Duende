"use strict";
function getRealtimePrice(symbol) {
    return 'SELECT * FROM pm.finance WHERE symbol="' + symbol + '"';
}
exports.getRealtimePrice = getRealtimePrice;
//# sourceMappingURL=yql-querycreator.js.map