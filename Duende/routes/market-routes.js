"use strict";
var index_list = [
    {
        name: 'IBEX-35',
        symbol: '^IBEX',
        growth: 5.38,
        value: 10892,
        description: 'Mercado Español'
    }, {
        name: 'NASDAQ',
        symbol: '^NASDAQ',
        growth: -1.87,
        value: 18930,
        description: 'Mercado amerciano'
    }, {
        name: 'DAX-50',
        symbol: '^DAX',
        growth: -2.41,
        value: 12374,
        description: 'Mercado aleman'
    }, {
        name: 'NIKKEI-225',
        symbol: '^NIKKEI',
        growth: 0.79,
        value: 4859,
        description: 'Mercado japones'
    }
];
function markets(req, res) {
    res.render('markets', { title: 'Panel de Mercados', index_list: index_list, year: new Date().getFullYear() });
}
exports.markets = markets;
;
function specific_market(req, res) {
    res.render('specific_market', { title: 'Mercado Especifico', year: new Date().getFullYear() });
}
exports.specific_market = specific_market;
;
//# sourceMappingURL=market-routes.js.map