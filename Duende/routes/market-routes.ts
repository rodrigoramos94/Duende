import express = require('express');
import data = require('../Scripts/data-test');

var indexes_list = data.indexes_list;

export function markets(req: express.Request, res: express.Response) {
    res.render('markets', { title: 'Panel de Mercados', indexes_list, year: new Date().getFullYear() });
};

export function specific_market(req: express.Request, res: express.Response) {
    res.render('specific_market', { title: 'Mercado Especifico', year: new Date().getFullYear() });
};