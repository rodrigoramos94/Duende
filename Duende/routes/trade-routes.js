"use strict";
function trades(req, res) {
    res.render('trades', { title: 'Panel de Mercados', year: new Date().getFullYear() });
}
exports.trades = trades;
;
function advanced_trades(req, res) {
    res.render('advanced_trades', { title: 'Operaciones Avanzadas', year: new Date().getFullYear() });
}
exports.advanced_trades = advanced_trades;
;
//# sourceMappingURL=trade-routes.js.map