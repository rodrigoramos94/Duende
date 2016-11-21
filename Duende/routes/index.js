"use strict";
var market_routes = require('./market-routes');
var trade_routes = require('./trade-routes');
// STATIC PAGES
function login(req, res) {
    res.render('login', { title: 'Login', year: new Date().getFullYear() });
}
exports.login = login;
;
function about(req, res) {
    res.render('about', { title: 'About', year: new Date().getFullYear(), message: 'Description page' });
}
exports.about = about;
;
function contact(req, res) {
    res.render('contact', { title: 'Contact', year: new Date().getFullYear(), message: 'Contact page' });
}
exports.contact = contact;
;
function error404(req, res) {
    res.render('error404', 404);
}
exports.error404 = error404;
;
var index_list = [
    {
        name: 'IBEX-35',
        value: +5.38,
        description: 'Mercado Español'
    }, {
        name: 'NASDAQ',
        value: -1.87,
        description: 'Mercado amerciano'
    }, {
        name: 'DAX-50',
        value: -2.41,
        description: 'Mercado aleman'
    }, {
        name: 'NIKKEI-225',
        value: 0.79,
        description: 'Mercado japones'
    }
];
function home(req, res) {
    res.render('home', { title: 'Home', user_name: 'Rodrigo', index_list: index_list, year: new Date().getFullYear() });
}
exports.home = home;
;
function markets(req, res) { market_routes.markets(req, res); }
exports.markets = markets;
;
function specific_market(req, res) { market_routes.specific_market(req, res); }
exports.specific_market = specific_market;
;
function trades(req, res) { trade_routes.trades(req, res); }
exports.trades = trades;
;
function advanced_trades(req, res) { trade_routes.advanced_trades(req, res); }
exports.advanced_trades = advanced_trades;
;
//# sourceMappingURL=index.js.map