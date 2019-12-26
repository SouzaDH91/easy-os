const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {

    res.render('home', { title: 'my other page', layout: 'login' });

});

router.get('/dashboard', (req, res) => {

    res.render('home/index');

});

router.get('/clients', (req, res) => {

    res.render('home/clients/index');

});

router.get('/products', (req, res) => {

    res.render('home/products/index');

});

router.get('/services', (req, res) => {

    res.render('home/services/index');

});

router.get('/os', (req, res) => {

    res.render('home/os/index');

});

router.get('/sales', (req, res) => {

    res.render('home/sales/index');

});

router.get('/warranty-terms', (req, res) => {

    res.render('home/warranty-terms/index');

});

router.get('/files', (req, res) => {

    res.render('home/files/index');

});

// #### Financial ####

router.get('/financial/entries', (req, res) => {

    res.render('home/financial/entries');

});

// #### Reports ####

router.get('/reports/clients', (req, res) => {

    res.render('home/reports/clients');

});

router.get('/reports/products', (req, res) => {

    res.render('home/reports/products');

});

router.get('/reports/services', (req, res) => {

    res.render('home/reports/services');

});

router.get('/reports/os', (req, res) => {

    res.render('home/reports/os');

});

router.get('/reports/sales', (req, res) => {

    res.render('home/reports/sales');

});

router.get('/reports/financial', (req, res) => {

    res.render('home/reports/financial');

});

// #### Settings ####

router.get('/settings/users', (req, res) => {

    res.render('home/settings/users');

});

router.get('/settings/issuer', (req, res) => {

    res.render('home/settings/issuer');

});

router.get('/settings/permissions', (req, res) => {

    res.render('home/settings/permissions');

});

router.get('/settings/audit', (req, res) => {

    res.render('home/settings/audit');

});

router.get('/settings/emails', (req, res) => {

    res.render('home/settings/emails');

});

router.get('/settings/backup', (req, res) => {

    res.render('home/settings/backup');

});

module.exports = router;