const express = require('express');

const user = require('./user');
const people = require('./people');
const music = require('./Music')
const service = require('./Service');
const orders = require('./Orders');

const router = express();

router.use(user);
router.use(people);
router.use(music);
router.use(service);
router.use(orders);

module.exports = router;
