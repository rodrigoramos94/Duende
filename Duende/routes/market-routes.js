"use strict";
function markets(req, res) {
    res.render('markets', { title: 'Panel de Mercados', year: new Date().getFullYear() });
}
exports.markets = markets;
;
function specific_market(req, res) {
    res.render('specific_market', { title: 'Mercado Especifico', year: new Date().getFullYear() });
}
exports.specific_market = specific_market;
;
//# sourceMappingURL=market-routes.js.map