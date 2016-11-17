import express = require('express');

export function markets(req: express.Request, res: express.Response) {
    res.render('markets', { title: 'Panel de Mercados', year: new Date().getFullYear() });
};

export function specific_market(req: express.Request, res: express.Response) {
    res.render('specific_market', { title: 'Mercado Especifico', year: new Date().getFullYear() });
};