﻿/*
 * GET home page.
 */
import express = require('express');

export function login(req: express.Request, res: express.Response) {
    res.render('login', { title: 'Login', year: new Date().getFullYear() });
};

export function index(req: express.Request, res: express.Response) {
    res.render('index', { title: 'Home', year: new Date().getFullYear() });
};

export function about(req: express.Request, res: express.Response) {
    res.render('about', { title: 'About', year: new Date().getFullYear(), message: 'Description page' });
};

export function contact(req: express.Request, res: express.Response) {
    res.render('contact', { title: 'Contact', year: new Date().getFullYear(), message: 'Contact page' });
};
