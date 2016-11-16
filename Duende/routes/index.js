"use strict";
function login(req, res) {
    res.render('login', { title: 'Login', year: new Date().getFullYear() });
}
exports.login = login;
;
function index(req, res) {
    res.render('index', { title: 'Home', year: new Date().getFullYear() });
}
exports.index = index;
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
//# sourceMappingURL=index.js.map