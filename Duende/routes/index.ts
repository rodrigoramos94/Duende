/*
 * GET home page.
 */
import express = require('express');
import market_routes = require('./market-routes');
import trade_routes = require('./trade-routes');

// STATIC PAGES
export function login(req: express.Request, res: express.Response) {
    res.render('login', { title: 'Login', year: new Date().getFullYear() });
};
export function about(req: express.Request, res: express.Response) {
    res.render('about', { title: 'About', year: new Date().getFullYear(), message: 'Description page' });
};
export function contact(req: express.Request, res: express.Response) {
    res.render('contact', { title: 'Contact', year: new Date().getFullYear(), message: 'Contact page' });
};
export function error404(req: express.Request, res: express.Response) {
    res.render('error404', 404);
};


export function home(req: express.Request, res: express.Response) {
    res.render('home', { title: 'Home', year: new Date().getFullYear() });
};

export function markets(req: express.Request, res: express.Response) { market_routes.markets(req, res); };
export function specific_market(req: express.Request, res: express.Response) { market_routes.specific_market(req, res); };

export function trades(req: express.Request, res: express.Response) { trade_routes.trades(req, res); };
export function advanced_trades(req: express.Request, res: express.Response) { trade_routes.advanced_trades(req, res); };
