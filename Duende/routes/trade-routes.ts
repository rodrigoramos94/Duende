import express = require('express');

export function trades(req: express.Request, res: express.Response) {
    res.render('trades', { title: 'Panel de Mercados', year: new Date().getFullYear() });
};

export function advanced_trades(req: express.Request, res: express.Response) {
    res.render('advanced_trades', { title: 'Operaciones Avanzadas', year: new Date().getFullYear() });
};