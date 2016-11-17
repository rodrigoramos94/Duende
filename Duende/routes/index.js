"use strict";
var market_routes = require('./market-routes');
var trade_routes = require('./trade-routes');
// GENERAL 
function login(req, res) {
    res.render('login', { title: 'Login', year: new Date().getFullYear() });
}
exports.login = login;
;
function general_panel(req, res) {
    res.render('index', { title: 'Panel General', year: new Date().getFullYear() });
}
exports.general_panel = general_panel;
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