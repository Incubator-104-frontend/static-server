
const express = require('express');
const router = express.Router();
const apiIndexController = require('./apiIndexController');

router.use(function timeLog(req, res, next) {
    next();
});

router.get('/', apiIndexController);

module.exports = router;